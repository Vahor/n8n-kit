// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { ToolHttpRequestNodeParameters } from "../nodes/ToolHttpRequest";
import { Node, type NodeProps } from "../../nodes";

export interface ToolHttpRequestProps extends NodeProps {
    readonly parameters: ToolHttpRequestNodeParameters;
}

/**
 * Makes an HTTP request and returns the response data
 */
export class ToolHttpRequest<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.toolHttpRequest" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: ToolHttpRequestProps) {
        super(id, props);
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
