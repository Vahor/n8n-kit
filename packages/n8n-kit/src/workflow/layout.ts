import dagre from "@dagrejs/dagre";
import type { BaseNode } from "../nodes/node";

export interface WorkflowLayoutOptions {
	rankdir?: "TB" | "BT" | "LR" | "RL";
	nodesep?: number;
	ranksep?: number;
	marginx?: number;
	marginy?: number;
}

export function calculateLayout(
	nodes: BaseNode[],
	options: WorkflowLayoutOptions = {},
): void {
	const g = new dagre.graphlib.Graph();

	g.setGraph({
		rankdir: options.rankdir || "LR",
		nodesep: options.nodesep || 100,
		ranksep: options.ranksep || 100,
		marginx: options.marginx || 60,
		marginy: options.marginy || 60,
	});

	// Add nodes to the graph
	for (const node of nodes) {
		g.setNode(node.id, {
			width: node.size.width,
			height: node.size.height,
			label: node.id,
		});
	}

	// Add edges based on connections
	for (const node of nodes) {
		for (const endState of node.listOutgoing()) {
			g.setEdge(node.id, endState.id, {
				label: `${node.id} -> ${endState.id}`,
			});
		}
	}

	// Calculate layout
	dagre.layout(g);

	// Apply calculated positions to nodes
	g.nodes().forEach((nodeId) => {
		const dagreNode = g.node(nodeId);
		const node = nodes.find((n) => n.id === nodeId);
		if (node && dagreNode) {
			node.position = [dagreNode.x, dagreNode.y];
		}
	});
}
