import type { Type } from "arktype";
import { BaseNode } from "../nodes/node";
import { validateIdentifier } from "../utils/slugify";
import type { Chain, ChainContext } from "./chain/chain";
import { Group } from "./group";
import { calculateLayout } from "./layout";
import type { Tag } from "./tag";

interface WorkflowProps<
	Input extends Type,
	Output extends Type,
	C_CC extends ChainContext,
> {
	name?: string;
	inputSchema?: Input;
	outputSchema?: Output;
	definition:
		| Chain<C_CC, any>
		| ((workflow: Workflow<Input, Output>) => Chain<C_CC, any>);
	unlinkedNodes?: BaseNode<any, any>[];
	tags?: Tag[];
	active?: boolean;
	description?: string;
}

export class Workflow<
	Input extends Type = any,
	Output extends Type = any,
	C_CC extends ChainContext = any,
> {
	public readonly id: string;
	public readonly props: WorkflowProps<Input, Output, C_CC>;

	/**
	 * @internal
	 */
	public isValid = false;
	/**
	 * @internal
	 */
	public "~cachedDefinition"?: Chain<C_CC, any>;

	public constructor(id: string, props: WorkflowProps<Input, Output, C_CC>) {
		this.id = validateIdentifier(id);
		this.props = props;
	}

	public addUnlinkedNode(node: BaseNode<any, any>) {
		this.props.unlinkedNodes ??= [];
		this.props.unlinkedNodes.push(node);
	}

	public getName() {
		return this.props.name ?? "Untitled";
	}

	public getDefinition() {
		// TODO: validate calls getDefinition, and builds also calls getDefinition. So if validate changes stuffs like parents, it won't be saved unless we cache the result;
		if (typeof this.props.definition === "function") {
			if (this["~cachedDefinition"]) {
				return this["~cachedDefinition"];
			}
			this["~cachedDefinition"] = this.props.definition(this);
			return this["~cachedDefinition"];
		}
		this["~cachedDefinition"] = this.props.definition;
		return this["~cachedDefinition"];
	}

	public build() {
		const nodes = this.getDefinition()
			.toList()
			.filter((state): state is BaseNode => state instanceof BaseNode);

		const groups = (this.props.unlinkedNodes ?? []).filter(
			(node): node is Group<any> => node instanceof Group,
		);

		const layoutNodes = [...nodes, ...groups];
		calculateLayout(layoutNodes);

		type Connection = { node: string; type: "main"; index: number };
		const connections: Record<string, { main: Connection[][] }> = {};
		for (const node of nodes) {
			if (node instanceof Group) continue;
			for (const endState of node.listOutgoing()) {
				connections[node.id] ??= { main: [] };
				const nodeConnection = connections[node.id]!;
				const connectionOptions = node["~getConnectionOptions"](endState.id);

				if (!nodeConnection.main[connectionOptions.from]) {
					nodeConnection.main[connectionOptions.from] = [];
				}

				nodeConnection.main[connectionOptions.from]!.push({
					node: endState.id,
					type: "main",
					index: connectionOptions.to,
				});
			}
		}

		return {
			id: this.id,
			name: this.getName(),
			nodes: [
				...nodes.map((node) => node.toNode()),
				...(this.props.unlinkedNodes?.map((node) => node.toNode()) ?? []),
			],
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
		const nodes = this.getDefinition()
			.toList()
			.filter((state): state is BaseNode => state instanceof BaseNode);

		// check that ids are unique
		const ids = new Set<string>();
		const allNodes = [...nodes, ...(this.props.unlinkedNodes ?? [])];
		for (const node of allNodes) {
			if (ids.has(node.id)) {
				throw new Error(`Node with id ${node.id} already exists`);
			}
			ids.add(node.id);
		}

		const groups = (this.props.unlinkedNodes ?? []).filter(
			(node): node is Group<any> => node instanceof Group,
		);

		const validateNested = (node: BaseNode<any, any>) => {
			node["~setParent"](this);
			node["~validate"]();
		};

		for (const node of nodes) {
			validateNested(node);
		}

		for (const node of groups) {
			validateNested(node);
		}

		for (const node of this.props.unlinkedNodes ?? []) {
			validateNested(node);
		}

		for (const node of this.props.unlinkedNodes ?? []) {
			if (!node.position) {
				throw new Error(
					`Node '${node.getPath()}' does not have a position. Position is required for unlinked nodes.`,
				);
			}
		}

		this.isValid = true;
	}
}
