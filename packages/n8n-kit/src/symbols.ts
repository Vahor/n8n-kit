import type { Node } from "./nodes/node";
import type { Group, Workflow } from "./workflow";
import type { ImportedWorkflow } from "./workflow/imported-workflow";

const isValidObject = (obj: any) => typeof obj === "object" && obj !== null;

export const NODE_SYMBOL = Symbol("Node");
export const isNode = (node: any): node is Node =>
	isValidObject(node) && NODE_SYMBOL in node;

export const GROUP_SYMBOL = Symbol("Group");
export const isGroup = (node: any): node is Group<any> =>
	isValidObject(node) && GROUP_SYMBOL in node;

export const WORKFLOW_SYMBOL = Symbol("Workflow");
export const isWorkflow = (node: any): node is Workflow =>
	isValidObject(node) && WORKFLOW_SYMBOL in node;

export const IMPORTED_WORKFLOW_SYMBOL = Symbol("ImportedWorkflow");
export const isImportedWorkflow = (node: any): node is ImportedWorkflow =>
	isValidObject(node) && IMPORTED_WORKFLOW_SYMBOL in node;
