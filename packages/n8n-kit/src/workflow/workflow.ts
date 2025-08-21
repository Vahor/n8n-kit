import type { Type } from "arktype";
import { prefix } from "../constants";
import { BaseNode } from "../nodes/node";
import { shortHash, validateIdentifier } from "../utils/slugify";
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
	tags?: Tag[] | undefined;
	active?: boolean;
	description?: string;

	settings?: {
		/**
		 * @default "v1"
		 */
		executionOrder: "v1" | "v2";

		timezone?: string;

		/**
		 * @default "all"
		 */
		saveDataErrorExecution?: "all" | "none";
		/**
		 * @default "all"
		 */
		saveDataSuccessExecution?: "all" | "none";

		/**
		 * @default true
		 */
		saveExecutionProgress?: boolean;

		/**
		 * @default true
		 */
		saveManualExecutions?: boolean;

		callerPolicy?: "workflowsFromSameOwner";

		/**
		 * In seconds
		 * @default undefined
		 */
		executionTimeout?: number | undefined;
	};
}

export class Workflow<
	Input extends Type = any,
	Output extends Type = any,
	C_CC extends ChainContext = any,
> {
	public readonly id: string;
	public readonly hashId: string;
	private readonly tags: Tag[];

	// Undefined until we know the id
	public n8nWorkflowId: string | undefined = undefined;

	/**
	 * @internal
	 */
	public isValid = false;
	/**
	 * @internal
	 */
	public "~cachedDefinition"?: Chain<C_CC, any>;

	public constructor(
		id: string,
		public readonly props: WorkflowProps<Input, Output, C_CC>,
	) {
		this.hashId = shortHash(id);
		this.id = validateIdentifier(id);
		this.tags = this.buildTags();
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
			id: this.hashId,
			name: this.getName(),
			nodes: [
				...nodes.map((node) => node.toNode()),
				...(this.props.unlinkedNodes?.map((node) => node.toNode()) ?? []),
			],
			connections: connections,
			settings: this.props.settings ?? {},
			staticData: {},
			active: this.props.active ?? false,
			tags: this.tags,
		};
	}

	private buildTags() {
		const tags = [...(this.props.tags ?? [])].filter(
			(tag) => !tag.name.startsWith(`${prefix}id-`),
		);

		tags.push({
			name: workflowTagId(this.hashId),
		});
		return tags;
	}

	/**
	 * Should only be used with `typeof`
	 * Returns null.
	 */
	public getInputType(): Input["infer"] {
		return null as any;
	}

	public getInputSchema(): Input | null {
		return this.props.inputSchema ?? null;
	}

	/**
	 * Should only be used with `typeof`
	 * Returns null.
	 */
	public getOutputType(): Output["infer"] {
		return null as any;
	}

	public getOutputSchema(): Output | null {
		return this.props.outputSchema ?? null;
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

export type WorkflowDefinition = ReturnType<Workflow["build"]>;

export const workflowTagId = (id: string) => `${prefix}${id}`;
