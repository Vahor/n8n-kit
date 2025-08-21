import type { Type } from "arktype";
import { BaseNode } from "../nodes/node";
import { validateIdentifier } from "../utils/slugify";
import type { Chain } from "./chain/chain";
import { calculateLayout } from "./layout";
import type { Tag } from "./tag";

interface WorkflowProps<Input extends Type, Output extends Type> {
	name?: string;
	inputSchema?: Input;
	outputSchema?: Output;
	definition: Chain<any, any>;
	unlinkedNodes?: BaseNode[];
	tags?: Tag[];
	active?: boolean;
	description?: string;
}

export class Workflow<Input extends Type, Output extends Type> {
	public readonly id: string;
	public readonly props: WorkflowProps<Input, Output>;

	public constructor(id: string, props: WorkflowProps<Input, Output>) {
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

		type Connection = { node: string; type: "main"; index: number };
		const connections: Record<string, { main: Connection[][] }> = {};
		for (const node of nodes) {
			for (const endState of node.listOutgoing()) {
				connections[node.id] ??= { main: [[]] };
				connections[node.id]?.main[0]!.push({
					node: endState.id,
					type: "main",
					index: endState["~getConnectionIndex"](node.id),
				});
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

	/**
	 * Should only be used with `typeof`
	 * Returns null.
	 */
	public getInputType(): Input["infer"] {
		return null as any;
	}

	/**
	 * Should only be used with `typeof`
	 * Returns null.
	 */
	public getOutputType(): Output["infer"] {
		return null as any;
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
