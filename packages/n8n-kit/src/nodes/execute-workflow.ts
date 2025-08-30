import type { Type } from "arktype";
import type { ExecuteWorkflowNodeParameters } from "../generated/nodes/ExecuteWorkflow";
import { ExecuteWorkflow as _ExecuteWorkflow } from "../generated/nodes-impl/ExecuteWorkflow";
import { isWorkflow } from "../symbols";
import { RESOLVED_WORKFLOW_ID, type Workflow } from "../workflow";
import type { ImportedWorkflow } from "../workflow/imported-workflow";
import type { NodeProps } from "./node";

export interface ExecuteWorkflowProps<Input extends Type, Output extends Type>
	extends NodeProps {
	parameters: Omit<
		ExecuteWorkflowNodeParameters,
		"workflowId" | "source" | "workflowInputs"
	> & {
		workflow: Workflow<Input, Output> | ImportedWorkflow<Input, Output>;
		workflowInputs: Input["infer"];
	};
}

export class ExecuteWorkflow<
	L extends string,
	Input extends Type,
	Output extends Type,
> extends _ExecuteWorkflow<Output["infer"], L> {
	public constructor(
		id: L,
		override props: ExecuteWorkflowProps<Input, Output>,
	) {
		super(id, props);
	}

	override async getParameters() {
		const workflowId = isWorkflow(this.props.parameters.workflow)
			? this.props.parameters.workflow.id
			: this.props.parameters.workflow.getId();

		return {
			...this.props.parameters,
			// remove workflow from output as it's only used for the workflowId
			workflow: undefined,
			workflowId: {
				value: RESOLVED_WORKFLOW_ID(workflowId),
				mode: "list",
				cachedResultName: workflowId,
			},
			source: "database",
		};
	}
}
