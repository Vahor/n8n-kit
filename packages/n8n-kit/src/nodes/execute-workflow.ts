import type { Type } from "arktype";
import {
	type ExecuteWorkflowNodeParameters,
	name,
	version,
} from "../generated/nodes/ExecuteWorkflow";
import type { Workflow } from "../workflow";
import { Node, type NodeProps } from "./node";

interface ExecuteWorkflowBaseProps
	extends Omit<
		ExecuteWorkflowNodeParameters,
		"workflowId" | "source" | "workflowInputs"
	> {}

export interface ExecuteWorkflowProps<Input extends Type, Output extends Type>
	extends NodeProps,
		ExecuteWorkflowBaseProps {
	workflow: Workflow<Input, Output>;
	workflowInputs: Input["infer"];
}

export class ExecuteWorkflow<
	L extends string,
	Input extends Type,
	Output extends Type,
> extends Node<L, Output["infer"]> {
	protected override type = `n8n-nodes-base.${name}` as const;
	protected override typeVersion = version;

	public constructor(
		id: L,
		public readonly props: ExecuteWorkflowProps<Input, Output>,
	) {
		super(id, props);
	}

	override getParameters() {
		return {
			...this.props,
			// nice thank you typescript
			workflow: undefined as undefined,
			workflowId: {
				value: this.props.workflow.id,
				mode: "list",
				cachedResultName: this.props.workflow.id,
			},
			workflowInputs: this.props.workflowInputs,
			source: "database",
		};
	}
}
