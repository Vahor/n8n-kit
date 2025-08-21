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
	const g = new dagre.graphlib.Graph({ compound: true, directed: true });

	g.setGraph({
		rankdir: options.rankdir || "LR",
		nodesep: options.nodesep || 100,
		ranksep: options.ranksep || 100,
		marginx: options.marginx || 60,
		marginy: options.marginy || 60,
	});

	// Add nodes to the graph
	for (const node of nodes) {
		if (node instanceof Group) {
			g.setNode(node.id, {
				label: node.id,
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
		if (node.groupId) {
			g.setParent(node.id, node.groupId);
		}
		for (const endState of node.listOutgoing()) {
			g.setEdge(node.id, endState.id, {
				label: `${node.id} -> ${endState.id}`,
			});
		}
	}

	// Calculate layout
	dagre.layout(g, {});

	// Apply calculated positions to nodes
	g.nodes().forEach((nodeId) => {
		const dagreNode = g.node(nodeId);
		const node = nodes.find((n) => n.id === nodeId);
		if (node && dagreNode) {
			node.position = [dagreNode.x, dagreNode.y];
		}
	});

	// Update group positions and sizes
	const groupPadding = 60;
	for (const node of nodes) {
		if (!(node instanceof Group)) continue;
		const nodesInGroup = nodes.filter((n) => n.groupId === node.id);
		const minX = Math.min(
			...nodesInGroup.map(
				(n) => n.position![0] - n.size.width / 2 - groupPadding,
			),
		);
		const maxX = Math.max(
			...nodesInGroup.map(
				(n) => n.position![0] + n.size.width / 2 + groupPadding,
			),
		);
		const minY = Math.min(
			...nodesInGroup.map(
				(n) => n.position![1] - n.size.height / 2 - groupPadding,
			),
		);
		const maxY = Math.max(
			...nodesInGroup.map(
				(n) => n.position![1] + n.size.height / 2 + groupPadding,
			),
		);
		node.size = {
			width: maxX - minX,
			height: maxY - minY,
		};
		node.position![0] -= node.size.width / 2 - DEFAULT_NODE_SIZE.width / 2;
		node.position![1] -= node.size.height / 2 - DEFAULT_NODE_SIZE.height / 2;
	}
}
