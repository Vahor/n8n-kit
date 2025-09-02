import type { Type } from "arktype";
import type { App } from "../app";
import { getProjectSalt, prefix } from "../constants";
import { Node } from "../nodes/node";
import { WORKFLOW_SYMBOL } from "../symbols";
import { shortHash, validateIdentifier } from "../utils/slugify";
import { Placeholder, RESOLVED_NODE_ID, type State } from "./chain";
import { Chain } from "./chain/chain";
import { Group } from "./group";
import {
	ImportedWorkflow,
	type ImportedWorkflowProps,
} from "./imported-workflow";
import { calculateLayout } from "./layout";
import { ResolvedWorkflow } from "./resolved-workflow";
import type { Tag } from "./tag";

type WorkflowDefinitionProvider<Input extends Type, Output extends Type, T> =
	| T
	| ((workflow: Workflow<Input, Output>) => T)
	| Array<T>
	| ((workflow: Workflow<Input, Output>) => Array<T>);

export interface WorkflowProps<Input extends Type, Output extends Type> {
	name?: string;
	definition: WorkflowDefinitionProvider<
		Input,
		Output,
		Chain<any, any> | Node<any, unknown>
	>;
	tags?: string[] | undefined;
	active?: boolean;

	/** {@inheritDoc OutputSchema} */
	outputSchema?: Output;
	/** {@inheritDoc InputSchema} */
	inputSchema?: Input;

	settings?: {
		/**
		 * @default "v1"
		 */
		executionOrder?: "v1" | "v2";

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
> extends ResolvedWorkflow {
	/** @internal */
	static readonly [WORKFLOW_SYMBOL] = true;
	/** @internal */
	readonly [WORKFLOW_SYMBOL] = true;

	public readonly id: string;
	private readonly tags: string[];

	/**
	 * @internal
	 */
	public "~cachedDefinition"?: Array<Chain<any, any> | Node<any, any>>;
	private dynamicalyAddedNodes: Node<any, any>[] = [];

	public constructor(
		app: App,
		id: string,
		public readonly props: WorkflowProps<Input, Output>,
	) {
		super();

		const saltedId = `${getProjectSalt()}-${id}`;
		this.setHashId(shortHash(saltedId, 24 - prefix.length));
		this.id = validateIdentifier(id);
		this.tags = this.buildTags();

		app.add(this);
	}

	public static import<Input extends Type, Output extends Type>(
		app: App,
		props: ImportedWorkflowProps<Input, Output>,
	) {
		return new ImportedWorkflow(app, props);
	}

	public addToDynamicalyAddedNodes(node: Node<any, any>) {
		this.dynamicalyAddedNodes.push(node);
	}

	public getName() {
		return this.props.name ?? "Untitled";
	}

	public getDefinition() {
		if (this["~cachedDefinition"]) {
			return this["~cachedDefinition"];
		}

		// TODO: validate calls getDefinition, and builds also calls getDefinition. So if validate changes stuffs like parents, it won't be saved unless we cache the result;
		if (typeof this.props.definition === "function") {
			let definition = this.props.definition(this);
			if (!Array.isArray(definition)) {
				definition = [definition];
			}
			this["~cachedDefinition"] = definition;
			return this["~cachedDefinition"];
		}
		if (!Array.isArray(this.props.definition)) {
			this["~cachedDefinition"] = [this.props.definition];
		} else {
			this["~cachedDefinition"] = this.props.definition;
		}
		return this["~cachedDefinition"];
	}

	public getNodes() {
		const nodes = [
			...new Set(
				this.getDefinition()
					.flatMap((chain) =>
						chain instanceof Chain ? chain.toList() : [chain as State],
					)
					.filter((state): state is Node => state instanceof Node),
			),
		];
		return nodes;
	}

	public async build() {
		const nodes = this.getNodes();

		// Groups are added in dynamicalyAddedNodes
		const groups = (this.dynamicalyAddedNodes ?? []).filter(
			(node): node is Group<any> => node instanceof Group,
		);

		const layoutNodes = [...nodes, ...groups];
		calculateLayout(layoutNodes);

		type Connection = { node: string; type: string; index: number };
		const connections: Record<string, { [key: string]: Connection[][] }> = {};
		for (const node of nodes) {
			if (node instanceof Group) continue;
			for (let endState of node.listOutgoing()) {
				if (endState instanceof Placeholder) {
					const _endState = endState;
					endState = nodes.find(
						(n) => n.getLabel() === endState.id || n.id === endState.id,
					)!;
					if (!endState) {
						throw new Error(`Placeholder ${_endState.id} not found`);
					}
				}
				if (!(endState instanceof Node)) continue;

				const connectionOptions = node["~getConnectionOptions"](endState.id);
				const connectionType = connectionOptions.type ?? "main";
				const direction = connectionOptions.direction ?? "output";

				const from = direction === "output" ? node : endState;
				const to = direction === "output" ? endState : node;

				connections[from.getLabel()] ??= { [connectionType]: [] };
				const nodeConnection = connections[from.getLabel()]!;

				if (!nodeConnection[connectionType]![connectionOptions.from]) {
					nodeConnection[connectionType]![connectionOptions.from] = [];
				}

				nodeConnection[connectionType]![connectionOptions.from]!.push({
					node: to.getLabel(),
					type: connectionType,
					index: connectionOptions.to,
				});
			}
		}

		const builtNodes = await Promise.all(
			layoutNodes.flatMap((node) => node.toNode()),
		);

		// HACK: As we have to replace the node id in label in each expression, we need to do it here
		const resolvedNodes = builtNodes.map((node) => {
			const nodeParameters = node.parameters;
			if (nodeParameters) {
				// using stringify to make it easier to replaceAll
				let jsonParameters = JSON.stringify(nodeParameters);
				for (const n of nodes) {
					jsonParameters = jsonParameters.replaceAll(
						RESOLVED_NODE_ID(n.id),
						n.getLabel(),
					);
				}
				node.parameters = JSON.parse(jsonParameters);
			}
			return node;
		});

		return {
			id: this.getHashId()!,
			name: this.getName(),
			nodes: resolvedNodes,
			connections: connections,
			settings: this.props.settings ?? {},
			active: this.props.active ?? false,
			tags: this.tags.map((tag) => ({
				name: tag,
			})) as Tag[],
		};
	}

	private buildTags() {
		const workflowTag = workflowTagId(this.getHashId()!);
		const tags = [...(this.props.tags ?? [])].filter(
			(tag) => !tag.startsWith(prefix),
		);

		tags.push(workflowTag);
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

	public override getInternalId() {
		return this.id;
	}

	/** @internal */
	public "~validate"(): void {
		const nodes = this.getNodes();

		// check that ids are unique
		const ids = new Set<string>();
		const allNodes = [...nodes, ...this.dynamicalyAddedNodes];
		for (const node of allNodes) {
			if (ids.has(node.id)) {
				throw new Error(`Node with id ${node.id} already exists`);
			}
			ids.add(node.id);
		}

		const groups = this.dynamicalyAddedNodes.filter(
			(node): node is Group<any> => node instanceof Group,
		);

		const validateNested = (node: Node<any, any>) => {
			node["~setParent"](this);
			node["~validate"]();
		};

		for (const node of nodes) {
			validateNested(node);
		}

		for (const node of groups) {
			validateNested(node);
		}

		for (const node of this.dynamicalyAddedNodes) {
			validateNested(node);
		}

		for (const node of this.dynamicalyAddedNodes) {
			if (!node.position) {
				throw new Error(
					`Node '${node.getPath()}' does not have a position. Position is required for dynamicaly added nodes.`,
				);
			}
		}
	}
}

export type WorkflowDefinition = Awaited<ReturnType<Workflow["build"]>>;

/** @internal */
export const workflowTagId = (id: string) => `${prefix}${id}`;
/** @internal */
export const RESOLVED_WORKFLOW_ID_PREFIX = `${prefix}resolved_workflow_id@`;
/** @internal */
export const RESOLVED_WORKFLOW_ID = (workflowId: string) =>
	`${RESOLVED_WORKFLOW_ID_PREFIX}${workflowId}`;
