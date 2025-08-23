import type { Type } from "arktype";
import {
	type ExecuteWorkflowTriggerNodeParameters,
	name,
	version,
} from "../generated/nodes/ExecuteWorkflowTrigger";
import type { Workflow } from "../workflow";
import { Node, type NodeProps } from "./node";

interface ExecuteWorkflowTriggerBaseProps
	extends Omit<ExecuteWorkflowTriggerNodeParameters, "workflowInputs"> {}

export interface ExecuteWorkflowTriggerProps
	extends NodeProps,
		ExecuteWorkflowTriggerBaseProps {}

export class ExecuteWorkflowTrigger<
	L extends string,
	Input extends Type,
> extends Node<L, Input["infer"]> {
	protected override type = `n8n-nodes-base.${name}` as const;
	protected override typeVersion = version;

	public constructor(
		private readonly workflow: Workflow<Input, any>,
		id: L,
		public readonly props: ExecuteWorkflowTriggerProps,
	) {
		super(id, props);
	}

	public buildWorkflowInputsSchema() {
		if (
			this.props.inputSource === undefined ||
			this.props.inputSource === "workflowInputs"
		) {
			const workflowInputSchema = this.workflow.getInputSchema();
			if (!workflowInputSchema) {
				throw new Error(
					`Workflow '${this.workflow.id}' does not have an input schema. But you are using 'workflowInputs' as input source.`,
				);
			}

			const workflowInputsJsonSchema = workflowInputSchema.toJsonSchema() as {
				properties: Record<string, { type?: string; enum?: any[] }>;
			};
			const getTypeFromEnum = (enumValues?: any[]) => {
				if (!enumValues || enumValues.length === 0) return undefined;
				return typeof enumValues[0];
			};

			return {
				values: Object.entries(workflowInputsJsonSchema.properties).map(
					([key, value]) => ({
						name: key,
						type: value.type ?? getTypeFromEnum(value.enum) ?? "any",
					}),
				),
			};
		}
		return undefined;
	}

	override getParameters() {
		return {
			...this.props,
			workflowInputs: this.buildWorkflowInputsSchema(),
		};
	}
}
