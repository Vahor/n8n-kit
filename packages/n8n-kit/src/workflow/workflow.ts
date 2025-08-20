import { BaseNode } from "../nodes/node";
import { validateIdentifier } from "../utils/slugify";
import type { Chain } from "./chain/chain";
import { calculateLayout } from "./layout";
import type { Tag } from "./tag";

interface WorkflowProps {
	name?: string;
	definition: Chain<any, any>;
	unlinkedNodes?: BaseNode[];
	tags?: Tag[];
	active?: boolean;
	description?: string;
}

export class Workflow {
	public readonly id: string;
	public readonly props: WorkflowProps;

	public constructor(id: string, props: WorkflowProps) {
		this.id = validateIdentifier(id);
		this.props = props;
	}

	public getName() {
		return this.props.name ?? "Untitled";
	}

	public build() {
		const nodes = this.props.definition
			.toList()
			.filter((state): state is BaseNode => state instanceof BaseNode);

		calculateLayout(nodes);

		type Connection = { node: string; type: "main"; index: 0 };
		const connections: Record<string, { main: Connection[][] }> = {};
		for (const node of nodes) {
			for (const endState of node.listOutgoing()) {
				connections[node.id] ??= { main: [] };
				connections[node.id]?.main.push([
					{
						node: endState.id,
						type: "main",
						index: 0,
					},
				]);
			}
		}

		return {
			id: this.id,
			name: this.getName(),
			nodes: nodes
				.concat(this.props.unlinkedNodes ?? [])
				.map((node) => node.toNode()),
			connections: connections,
			active: this.props.active ?? false,
			settings: {},
			staticData: {},
			meta: {},
			tags: this.props.tags,
		};
	}

	public "~validate"(): void {
		const nodes = this.props.definition
			.toList()
			.filter((state): state is BaseNode => state instanceof BaseNode);

		for (const node of nodes) {
			node["~setParent"](this);
			node["~validate"]();
		}
		for (const node of this.props.unlinkedNodes ?? []) {
			node["~setParent"](this);
			node["~validate"]();
		}

		for (const node of this.props.unlinkedNodes ?? []) {
			if (!node.position) {
				throw new Error(
					`Node '${node.getPath()}' does not have a position. Position is required for unlinked nodes.`,
				);
			}
		}
	}
}
