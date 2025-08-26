import logger from "../logger";
import type { WorkflowDefinition } from "../workflow";

type TreeNode = {
	node: WorkflowDefinition["nodes"][number];
	children: TreeNode[];
	/* Contains connections info from children and cross-tree connections */
	connectionsTo: Array<{
		name: string;
		type: string;
		fromIndex: number;
		toIndex: number;
	}>;
	crossTreeConnections: Array<{
		name: string;
		type: string;
		fromIndex: number;
		toIndex: number;
	}>;
};

export type Tree = {
	root: TreeNode;
};

export class TreeBuilder {
	private nodeNameMap: Map<string, WorkflowDefinition["nodes"][number]>;
	private connections: WorkflowDefinition["connections"];

	private visitedNodes: Set<string>;
	private crossTreeConnections: Map<string, any[]>;

	constructor(workflow: WorkflowDefinition) {
		this.nodeNameMap = new Map(workflow.nodes.map((node) => [node.name, node]));
		this.connections = workflow.connections;
		this.visitedNodes = new Set();
		this.crossTreeConnections = new Map();
	}

	public buildTrees(): Tree[] {
		this.visitedNodes.clear();
		this.crossTreeConnections.clear();

		const trees: Tree[] = [];

		// Find nodes with incoming connections
		const hasIncoming = new Set<string>();
		for (const [toNode, nodeConnections] of Object.entries(this.connections)) {
			for (const outputGroups of Object.values(nodeConnections)) {
				for (let i = 0; i < outputGroups.length; i++) {
					const connectionGroup = outputGroups[i]!;
					connectionGroup.forEach((connection) => {
						// NOTE: 'ai_*' connections are in reverse;
						if (connection.type.startsWith("ai_")) {
							hasIncoming.add(toNode);
							// HACK: add a connection
							this.connections[connection.node] ??= {};
							this.connections[connection.node]![connection.type] ??= [[]];
							this.connections[connection.node]![connection.type]![0]!.push({
								node: toNode,
								type: connection.type,
								index: 0,
							});

							// remove the old one
							this.connections[toNode]![connection.type]![i] = this.connections[
								toNode
							]![connection.type]![i]!.filter(
								(conn) => conn.node !== connection.node,
							);
						} else {
							hasIncoming.add(connection.node);
						}
					});
				}
			}
		}

		// Find root nodes (with no incoming connections)
		const allNodes = Array.from(this.nodeNameMap.values());
		const rootNodes = allNodes.filter((node) => !hasIncoming.has(node.name));

		rootNodes.forEach((node) => {
			const tree = this.buildTreeFromNode(node.name);
			if (tree) {
				trees.push(tree);
			}
		});

		return trees;
	}

	private buildTreeFromNode(startNodeName: string): Tree | null {
		const startNode = this.nodeNameMap.get(startNodeName);
		if (!startNode) {
			logger.error(`Node ${startNodeName} not found`);
			return null;
		}

		const treeVisited = new Set<string>();
		const root = this.buildSubtree(startNodeName, treeVisited);

		if (!root) {
			logger.error(`Failed to build subtree for node ${startNodeName}`);
			return null;
		}

		return { root };
	}

	private buildSubtree(
		nodeName: string,
		treeVisited: Set<string>,
	): TreeNode | null {
		const node = this.nodeNameMap.get(nodeName);
		if (!node) {
			logger.error(`Node ${nodeName} not found`);
			return null;
		}

		this.visitedNodes.add(nodeName);

		const isVisited = treeVisited.has(nodeName);

		const treeNode: TreeNode = {
			node,
			children: [],
			connectionsTo: [],
			crossTreeConnections: [],
		};

		// If we've already visited this node in this tree, it's a cycle
		if (isVisited) {
			return treeNode;
		}

		treeVisited.add(nodeName);

		// Get connections from this node
		const nodeConnections = this.connections[nodeName];
		if (nodeConnections) {
			Object.entries(nodeConnections).forEach(([outputType, outputGroups]) => {
				outputGroups.forEach((connectionGroup, toIndex) => {
					connectionGroup.forEach((connection) => {
						const connectionData = {
							name: connection.node,
							type: outputType,
							fromIndex: connection.index,
							toIndex: toIndex,
						};

						treeNode.connectionsTo.push(connectionData);

						// If target node is already visited, it's a cross-tree connection
						if (this.visitedNodes.has(connection.node)) {
							treeNode.crossTreeConnections.push(connectionData);

							// Store cross-tree connection
							if (!this.crossTreeConnections.has(nodeName)) {
								this.crossTreeConnections.set(nodeName, []);
							}
							this.crossTreeConnections.get(nodeName)!.push(connectionData);
						} else {
							// Build subtree for this connection
							const childNode = this.buildSubtree(connection.node, treeVisited);
							if (childNode) {
								treeNode.children.push(childNode);
							}
						}
					});
				});
			});
		}

		return treeNode;
	}
}
