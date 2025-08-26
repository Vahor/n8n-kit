import { describe, expect, test } from "bun:test";
import { Chain, Placeholder, Workflow } from "../../src";
import { Merge } from "../../src/nodes";
import { ManualTrigger, NoOp } from "../../src/nodes/generated";
import { TreeBuilder } from "../../src/utils/tree-builder";

describe("TreeBuilder", () => {
	describe("buildTrees", () => {
		test("handles empty workflow", () => {
			const workflow = new Workflow("test", {
				name: "Empty Workflow",
				definition: [],
			});

			const workflowDefinition = workflow.build();
			const builder = new TreeBuilder(workflowDefinition);
			const trees = builder.buildTrees();

			expect(trees).toEqual([]);
		});

		test("builds single node tree", () => {
			const workflow = new Workflow("test", {
				name: "Single Node",
				definition: new ManualTrigger("trigger"),
			});

			const workflowDefinition = workflow.build();
			const builder = new TreeBuilder(workflowDefinition);
			const trees = builder.buildTrees();

			expect(trees).toHaveLength(1);
			expect(trees[0]!.root.node.name).toBe("trigger");
			expect(trees[0]!.root.children).toHaveLength(0);
			expect(trees[0]!.root.connectionsTo).toHaveLength(0);
		});

		test("builds linear chain", () => {
			const workflow = new Workflow("test", {
				name: "Linear Chain",
				definition: Chain.start(new ManualTrigger("trigger"))
					.next(new NoOp("middle"))
					.next(new NoOp("end")),
			});

			const workflowDefinition = workflow.build();
			const builder = new TreeBuilder(workflowDefinition);
			const trees = builder.buildTrees();

			expect(trees).toHaveLength(1);
			const root = trees[0]!.root;
			expect(root.node.name).toBe("trigger");
			expect(root.children).toHaveLength(1);
			expect(root.children[0]!.node.name).toBe("middle");
			expect(root.children[0]!.children).toHaveLength(1);
			expect(root.children[0]!.children[0]!.node.name).toBe("end");
		});

		test("builds multiple parallel chains", () => {
			const workflow = new Workflow("test", {
				name: "Multiple Chains",
				definition: [
					Chain.start(new ManualTrigger("trigger1")).next(new NoOp("end1")),
					Chain.start(new ManualTrigger("trigger2")).next(new NoOp("end2")),
				],
			});

			const workflowDefinition = workflow.build();
			const builder = new TreeBuilder(workflowDefinition);
			const trees = builder.buildTrees();

			expect(trees).toHaveLength(2);
			const rootNames = trees.map((t) => t.root.node.name).sort();
			expect(rootNames).toEqual(["trigger1", "trigger2"]);
			expect(trees[0]!.root.children).toHaveLength(1);
			expect(trees[0]!.root.children[0]!.node.name).toBe("end1");
			expect(trees[1]!.root.children).toHaveLength(1);
			expect(trees[1]!.root.children[0]!.node.name).toBe("end2");
		});

		test("handles branching with multiple", () => {
			const workflow = new Workflow("test", {
				name: "Multiple",
				definition: Chain.start(new ManualTrigger("trigger")).multiple([
					new NoOp("branch1"),
					new NoOp("branch2"),
				]),
			});

			const workflowDefinition = workflow.build();
			const builder = new TreeBuilder(workflowDefinition);
			const trees = builder.buildTrees();

			expect(trees).toHaveLength(1);
			const root = trees[0]!.root;
			expect(root.children).toHaveLength(2);
			expect(root.connectionsTo).toHaveLength(2);
			const childNames = root.children.map((c) => c.node.name).sort();
			expect(childNames).toEqual(["branch1", "branch2"]);
		});

		test("handles branching with connect", () => {
			const trigger = new ManualTrigger("trigger");
			const noop1 = new NoOp("noop1");
			const noop2 = new NoOp("noop2");
			const merge = new Merge("merge", {
				parameters: { mode: "combine" },
			});

			const workflow = new Workflow("test", {
				name: "Cross-tree Connection",
				definition: Chain.start(trigger)
					.multiple([noop1, noop2])
					.connect(["noop1", "noop2"], merge),
			});

			const workflowDefinition = workflow.build();
			const builder = new TreeBuilder(workflowDefinition);
			const trees = builder.buildTrees();

			expect(trees).toHaveLength(1);
			const root = trees[0]!.root;
			expect(root.node.name).toBe("trigger");
			expect(root.children).toHaveLength(2);
			expect(root.children[0]!.node.name).toBe("noop1");
			expect(root.children[1]!.node.name).toBe("noop2");
		});

		test.only("handle cross chain connections", () => {
			const trigger = new ManualTrigger("trigger");
			const trigger2 = new ManualTrigger("trigger2");
			const noop1 = new NoOp("noop1");
			const noop2 = new NoOp("noop2");

			const workflow = new Workflow("test", {
				name: "Cross Chain",
				definition: [
					Chain.start(trigger).next(noop1).next(noop2),
					Chain.start(trigger2).next(new Placeholder("noop1")),
				],
			});
			const workflowDefinition = workflow.build();
			const builder = new TreeBuilder(workflowDefinition);
			const trees = builder.buildTrees();

			expect(trees).toHaveLength(2);
			const tree0 = trees[0]!;
			const tree1 = trees[1]!;

			expect(tree0.root.node.name).toBe("trigger");
			expect(tree0.root.children).toHaveLength(1);
			expect(tree0.root.children[0]!.node.name).toBe("noop1");
			expect(tree0.root.children[0]!.children).toHaveLength(1);
			expect(tree0.root.children[0]!.children[0]!.node.name).toBe("noop2");

			expect(tree1.root.node.name).toBe("trigger2");
			expect(tree1.root.children).toHaveLength(0);
			expect(tree1.root.crossTreeConnections).toHaveLength(1);
			expect(tree1.root.crossTreeConnections[0]!.name).toBe("noop1");
		});
	});
});
