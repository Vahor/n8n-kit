// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SerpApiCredentials } from "../credentials/SerpApi.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { ToolSerpApiNodeParameters } from "../nodes/ToolSerpApi";
import { Node, type NodeProps } from "../../nodes/node";

export interface ToolSerpApiProps extends NodeProps {
    readonly parameters: ToolSerpApiNodeParameters;
    readonly serpApiCredentials: Credentials<SerpApiCredentials>;
}

/**
 * Search in Google using SerpAPI
 */
export class ToolSerpApi<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.toolSerpApi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ToolSerpApiProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.serpApiCredentials];
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
