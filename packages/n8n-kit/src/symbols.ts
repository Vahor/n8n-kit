import type { Node } from "./nodes/node";
import type { Group, Workflow } from "./workflow";
import type { ImportedWorkflow } from "./workflow/imported-workflow";

export const NODE_SYMBOL = Symbol("Node");
export const isNode = (node: any): node is Node => NODE_SYMBOL in node;

export const GROUP_SYMBOL = Symbol("Group");
export const isGroup = (node: any): node is Group<any> => GROUP_SYMBOL in node;

export const WORKFLOW_SYMBOL = Symbol("Workflow");
export const isWorkflow = (node: any): node is Workflow =>
	WORKFLOW_SYMBOL in node;

export const IMPORTED_WORKFLOW_SYMBOL = Symbol("ImportedWorkflow");
export const isImportedWorkflow = (node: any): node is ImportedWorkflow =>
	IMPORTED_WORKFLOW_SYMBOL in node;
