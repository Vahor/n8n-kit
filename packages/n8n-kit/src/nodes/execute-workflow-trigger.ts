import type { Type } from "arktype";
import {
	type ExecuteWorkflowTriggerNodeParameters,
	type,
	version,
} from "../generated/nodes/ExecuteWorkflowTrigger";
import type { Workflow } from "../workflow";
import { Node, type NodeProps } from "./node";

export interface ExecuteWorkflowTriggerProps extends NodeProps {
	parameters?: Omit<ExecuteWorkflowTriggerNodeParameters, "workflowInputs">;
}

export class ExecuteWorkflowTrigger<
	L extends string,
	Input extends Type,
> extends Node<L, Input["infer"]> {
	protected override type = type;
	protected override typeVersion = version;

	public constructor(
		private readonly workflow: Workflow<Input, any>,
		id: L,
		override props: ExecuteWorkflowTriggerProps,
	) {
		super(id, props);
	}

	public buildWorkflowInputsSchema() {
		if (
			this.props.parameters?.inputSource === undefined ||
			this.props.parameters.inputSource === "workflowInputs"
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
			...this.props.parameters,
			workflowInputs: this.buildWorkflowInputsSchema(),
		};
	}
}
