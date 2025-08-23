// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ToolCodeNodeParameters } from "../nodes/ToolCode";
import { Node, type NodeProps } from "../../nodes";

export interface ToolCodeProps extends NodeProps {

    readonly parameters: ToolCodeNodeParameters;

}

/**
 * Write a tool in JS or Python
 */
export class ToolCode<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.toolCode" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props?: ToolCodeProps) {

        super(id, props);

    }


}
