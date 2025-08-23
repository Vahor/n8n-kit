import type { Type } from "arktype";
import {
	type ExecuteWorkflowNodeParameters,
	type,
	version,
} from "../generated/nodes/ExecuteWorkflow";
import type { Workflow } from "../workflow";
import { Node, type NodeProps } from "./node";

export interface ExecuteWorkflowProps<Input extends Type, Output extends Type>
	extends NodeProps {
	parameters: Omit<
		ExecuteWorkflowNodeParameters,
		"workflowId" | "source" | "workflowInputs"
	> & {
		workflow: Workflow<Input, Output>;
		workflowInputs: Input["infer"];
	};
}

export class ExecuteWorkflow<
	L extends string,
	Input extends Type,
	Output extends Type,
> extends Node<L, Output["infer"]> {
	protected override type = type;
	protected override typeVersion = version;

	public constructor(
		id: L,
		override props: ExecuteWorkflowProps<Input, Output>,
	) {
		super(id, props);
	}

	override getParameters() {
		return {
			...this.props.parameters,
			// remove workflow from output as it's onlu used for the workflowId
			workflow: undefined,
			workflowId: {
				value: this.props.parameters.workflow.id,
				mode: "list",
				cachedResultName: this.props.parameters.workflow.id,
			},
			source: "database",
		};
	}
}
