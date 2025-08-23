import dagre from "@dagrejs/dagre";
import {
	type BaseNode,
	DEFAULT_NODE_SIZE,
	type NodePosition,
} from "../nodes/node";
import { Group } from "./group";

export const GROUP_DEFAULT_POSITION: NodePosition = [
	Infinity,
	Infinity,
] as const;

export interface WorkflowLayoutOptions {
	rankdir?: "TB" | "BT" | "LR" | "RL";
	nodesep?: number;
	ranksep?: number;
	marginx?: number;
	marginy?: number;
}

export function calculateLayout(
	nodes: BaseNode<any, any>[],
	options: WorkflowLayoutOptions = {},
): void {
	const g = new dagre.graphlib.Graph({
		compound: true,
		directed: true,
	});

	g.setGraph({
		rankdir: options.rankdir || "LR",

		nodesep: options.nodesep || 120, // vertical distance between nodes
		ranksep: options.ranksep || 80, // horizontal distance between nodes

		// NOTE: I don't really see a difference between these two
		ranker: "network-simplex",
		// ranker: "tight-tree",
	});

	// Add nodes to the graph
	for (const node of nodes) {
		if (node instanceof Group) {
			g.setNode(node.id, {
				label: node.getLabel(),
			});
			continue;
		}
		g.setNode(node.id, {
			width: node.size.width,
			height: node.size.height,
			label: node.id,
		});
	}

	// Add edges based on connections
	for (const node of nodes) {
		if (node instanceof Group) continue;
		for (const groupid of node.groupIds) {
			g.setParent(node.id, groupid);
		}
		for (const endState of node.listOutgoing()) {
			g.setEdge(node.id, endState.id, {
				label: `${node.id} -> ${endState.id}`,
			});
		}
	}

	// Calculate layout
	dagre.layout(g, { disableOptimalOrderHeuristic: true });

	// Apply calculated positions to nodes
	g.nodes().forEach((nodeId) => {
		const dagreNode = g.node(nodeId);
		const node = nodes.find((n) => n.id === nodeId);
		if (node && dagreNode && node.position === undefined) {
			node.position = [dagreNode.x, dagreNode.y];
		}
	});

	// Update group positions and sizes
	const groupPadding = DEFAULT_NODE_SIZE.width / 2;
	for (const node of nodes) {
		if (!(node instanceof Group)) continue;
		const nodesInGroup = nodes.filter((n) => n.groupIds.includes(node.id));

		const minX = Math.min(...nodesInGroup.map((n) => n.position![0]));
		const maxX = Math.max(...nodesInGroup.map((n) => n.position![0]));
		const minY = Math.min(...nodesInGroup.map((n) => n.position![1]));
		const maxY = Math.max(...nodesInGroup.map((n) => n.position![1]));
		node.size = {
			width: maxX - minX + 2 * groupPadding + DEFAULT_NODE_SIZE.width,
			height: maxY - minY + 2 * groupPadding + DEFAULT_NODE_SIZE.height,
		};
		node.position![0] = minX - groupPadding;
		node.position![1] = minY - groupPadding;
	}
}
