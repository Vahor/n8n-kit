// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenRouterApiCredentials } from "../credentials/OpenRouterApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatOpenRouterNodeParameters } from "../nodes/LmChatOpenRouter";
import { Node, type NodeProps } from "../../nodes/node";

export interface LmChatOpenRouterProps extends NodeProps {
    readonly parameters: LmChatOpenRouterNodeParameters;
    readonly openRouterApiCredentials: Credentials<OpenRouterApiCredentials>;
}

/**
 * For advanced usage with an AI chain
 */
export class LmChatOpenRouter<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatOpenRouter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LmChatOpenRouterProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.openRouterApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
