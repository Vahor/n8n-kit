// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SearXngApiCredentials } from "../credentials/SearXngApi.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { ToolSearXngNodeParameters } from "../nodes/ToolSearXng";
import { Node, type NodeProps } from "../../nodes";

export interface ToolSearXngProps extends NodeProps {
    readonly parameters: ToolSearXngNodeParameters;
    readonly searXngApiCredentials: Credentials<SearXngApiCredentials>;
}

/**
 * Search in SearXNG
 */
export class ToolSearXng<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.toolSearXng" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ToolSearXngProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.searXngApiCredentials];
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
