// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WolframAlphaApiCredentials } from "../credentials/WolframAlphaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { ToolWolframAlphaNodeParameters } from "../nodes/ToolWolframAlpha";
import { Node, type NodeProps } from "../../nodes/node";

export interface ToolWolframAlphaProps extends NodeProps {
    readonly parameters: ToolWolframAlphaNodeParameters;
    readonly wolframAlphaApiCredentials: Credentials<WolframAlphaApiCredentials>;
}

/**
 * Connects to WolframAlpha's computational intelligence engine.
 */
export class ToolWolframAlpha<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.toolWolframAlpha" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ToolWolframAlphaProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.wolframAlphaApiCredentials];
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
