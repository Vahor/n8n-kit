import type { Node } from "./nodes/node";
import type { Group } from "./workflow";

export const NODE_SYMBOL = Symbol("Node");
export const isNode = (node: any): node is Node => NODE_SYMBOL in node;

export const GROUP_SYMBOL = Symbol("Group");
export const isGroup = (node: any): node is Group<any> => GROUP_SYMBOL in node;
