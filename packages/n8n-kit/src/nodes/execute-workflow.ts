import type { Type } from "arktype";
import type { ExecuteWorkflowNodeParameters } from "../generated/nodes/ExecuteWorkflow";
import { ExecuteWorkflow as _ExecuteWorkflow } from "../generated/nodes-impl/ExecuteWorkflow";
import type { JsonExpression, Workflow } from "../workflow";
import type { ImportedWorkflow } from "../workflow/imported-workflow";
import type { NodeProps } from "./node";

export interface ExecuteWorkflowProps<Input extends Type, Output extends Type>
	extends NodeProps {
	parameters: Omit<
		ExecuteWorkflowNodeParameters,
		"workflowId" | "source" | "workflowInputs"
	> & {
		workflow: Workflow<Input, Output> | ImportedWorkflow<Input, Output>;
		workflowInputs: Input["infer"] | JsonExpression<Input["infer"]>;
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

	private formatWorkflowInput() {
		return {
			mappingMode: "defineBelow",
			value: this.props.parameters.workflowInputs,
			matchingColumns: [],
			schema: [],
		};
	}

	override async getParameters() {
		return {
			...this.props.parameters,
			workflowInputs: this.formatWorkflowInput(),
			// remove workflow from output as it's only used for the workflowId
			workflow: undefined,
			workflowId: {
				__rl: true,
				value: this.props.parameters.workflow.toWorkflowId(),
				mode: "list",
				cachedResultName: this.props.parameters.workflow.getName(),
			},
			source: "database",
		};
	}
}
