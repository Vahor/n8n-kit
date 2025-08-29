import { describe, expect, test } from "bun:test";
import { Chain, Credentials, Workflow } from "../../src";
import { NoOp } from "../../src/nodes";
import {
	EmbeddingsGoogleGemini,
	VectorStorePineconeInsert,
} from "../../src/nodes/generated";

describe("Workflow", () => {
	describe("can build", () => {
		describe("with a single chain", () => {
			test("can build a workflow", async () => {
				const A = new NoOp("a");
				const B = new NoOp("b");

				const workflow = new Workflow("test", {
					definition: Chain.start(A).next(B),
				});
				const result = await workflow.build();
				expect(result.nodes.map((n) => n.id)).toEqual(["a", "b"]);
				expect(result.connections.a!.main![0]!.map((c) => c.node)).toEqual([
					"b",
				]);
				expect(result.connections).not.toHaveProperty("b");
			});
		});

		test("can build a workflow with multiple that inter-connect", async () => {
			const A = new NoOp("a");
			const B = new NoOp("b");
			const C = new NoOp("c");
			const D = new NoOp("d");

			const workflow = new Workflow("test", {
				definition: [Chain.start(A).next(B), Chain.start(C).multiple([A, D])],
			});
			const result = await workflow.build();
			expect(result.nodes.map((n) => n.id).toSorted()).toEqual([
				"a",
				"b",
				"c",
				"d",
			]);
			expect(result.connections.a!.main![0]!.map((c) => c.node)).toEqual(["b"]);
			expect(result.connections).not.toHaveProperty("b");
			expect(result.connections.c!.main![0]!.map((c) => c.node)).toEqual([
				"a",
				"d",
			]);
			expect(result.connections).not.toHaveProperty("d");
		});

		test("can build a workflow with multiple chains", async () => {
			const A = new NoOp("a");
			const B = new NoOp("b");
			const C = new NoOp("c");
			const D = new NoOp("d");

			const workflow = new Workflow("test", {
				definition: [Chain.start(A).next(B), Chain.start(C).next(D).next(B)],
			});
			const result = await workflow.build();
			expect(result.nodes.map((n) => n.id).toSorted()).toEqual([
				"a",
				"b",
				"c",
				"d",
			]);
			expect(result.connections.a!.main![0]!.map((c) => c.node)).toEqual(["b"]);
			expect(result.connections).not.toHaveProperty("b");
			expect(result.connections.c!.main![0]!.map((c) => c.node)).toEqual(["d"]);
			expect(result.connections.d!.main![0]!.map((c) => c.node)).toEqual(["b"]);
		});

		test("can reverse chain elements", async () => {
			const chain = Chain.start(
				new VectorStorePineconeInsert("upload-to-pinecone", {
					label: "Pinecone Vector Store",
					pineconeApiCredentials: Credentials.byId({
						name: "pineconeApi",
						id: "some-id",
					}),
					parameters: {
						pineconeIndex: {
							value: "company-files",
							mode: "list",
						},
					},
				}).withEmbedding(
					new EmbeddingsGoogleGemini("embeddings-google-gemini", {
						label: "Embeddings Google Gemini",
						googlePalmApiCredentials: Credentials.byId({
							name: "googlePalmApi",
							id: "some-id",
						}),
						parameters: {
							modelName: "models/text-embedding-004",
						},
					}),
				),
			);
			const workflow = new Workflow("test", {
				definition: chain,
			});
			const result = await workflow.build();
			expect(result.nodes.map((n) => n.id)).toEqual([
				"upload-to-pinecone",
				"embeddings-google-gemini",
			]);
			expect(
				result.connections["Embeddings Google Gemini"]!.ai_embedding![0]!.map(
					(c) => [c.node, c.type],
				),
			).toEqual([["Pinecone Vector Store", "ai_embedding"]]);
		});
	});
});
