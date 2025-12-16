import { describe, expect, test } from "bun:test";
import { App, Chain, Credentials, type, Workflow } from "../../src";
import { Code, NoOp } from "../../src/nodes";
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

				const app = new App();
				const workflow = new Workflow(app, "test", {
					definition: Chain.start(A).next(B),
				});
				const result = await workflow.build();
				expect(result.nodes.map((n) => n.id)).toEqual(["a", "b"]);
				expect(result.connections.a.main[0]!.map((c) => c.node)).toEqual(["b"]);
				expect(result.connections).not.toHaveProperty("b");
			});
		});

		test("can build a workflow with multiple that inter-connect", async () => {
			const A = new NoOp("a");
			const B = new NoOp("b");
			const C = new NoOp("c");
			const D = new NoOp("d");

			const app = new App();
			const workflow = new Workflow(app, "test", {
				definition: [Chain.start(A).next(B), Chain.start(C).multiple([A, D])],
			});
			const result = await workflow.build();
			expect(result.nodes.map((n) => n.id).toSorted()).toEqual([
				"a",
				"b",
				"c",
				"d",
			]);
			expect(result.connections.a.main[0]!.map((c) => c.node)).toEqual(["b"]);
			expect(result.connections).not.toHaveProperty("b");
			expect(result.connections.c.main[0]!.map((c) => c.node)).toEqual([
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

			const app = new App();
			const workflow = new Workflow(app, "test", {
				definition: [Chain.start(A).next(B), Chain.start(C).next(D).next(B)],
			});
			const result = await workflow.build();
			expect(result.nodes.map((n) => n.id).toSorted()).toEqual([
				"a",
				"b",
				"c",
				"d",
			]);
			expect(result.connections.a.main[0]!.map((c) => c.node)).toEqual(["b"]);
			expect(result.connections).not.toHaveProperty("b");
			expect(result.connections.c.main[0]!.map((c) => c.node)).toEqual(["d"]);
			expect(result.connections.d.main[0]!.map((c) => c.node)).toEqual(["b"]);
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
			const app = new App();
			const workflow = new Workflow(app, "test", {
				definition: chain,
			});
			const result = await workflow.build();
			expect(result.nodes.map((n) => n.id)).toEqual([
				"upload-to-pinecone",
				"embeddings-google-gemini",
			]);
			expect(
				result.connections["Embeddings Google Gemini"].ai_embedding[0]!.map(
					(c) => [c.node, c.type],
				),
			).toEqual([["Pinecone Vector Store", "ai_embedding"]]);
		});

		test("correctly replaces node ids in expression", async () => {
			const code = new Code("code", {
				label: "Some very long label",
				outputSchema: type({ type: "string" }),
				parameters: {
					jsCode: "",
				},
			});

			const app = new App();
			const workflow = new Workflow(app, "test", {
				definition: [
					Chain.start(code).next(
						({ $ }) =>
							new Code("code2", {
								parameters: {
									jsCode: $("code").toExpression(),
								},
							}),
					),
				],
			});
			const result = await workflow.build();
			expect(result.nodes.map((n) => n.id)).toEqual(["code", "code2"]);
			const code2Parameters = result.nodes.find(
				(n) => n.id === "code2",
			)!.parameters;
			expect(code2Parameters).toEqual({
				jsCode: "={{ $('Some very long label').item.json }}",
			});
		});

		test.failing("fails when two nodes have the same id", async () => {
			const app = new App();
			const workflow = new Workflow(app, "test", {
				definition: [Chain.start(new NoOp("a")).next(new NoOp("a"))],
			});
			workflow["~validate"]();
		});

		test.failing("fails when two nodes have the same id (label)", async () => {
			const app = new App();
			const workflow = new Workflow(app, "test", {
				definition: [
					Chain.start(new NoOp("a", { label: "a" })).next(
						new NoOp("b", { label: "a" }),
					),
				],
			});
			workflow["~validate"]();
		});
	});
});
