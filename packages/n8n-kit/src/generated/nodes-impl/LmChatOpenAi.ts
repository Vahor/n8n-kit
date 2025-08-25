// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenAiApiCredentials } from "../credentials/OpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatOpenAiNodeParameters } from "../nodes/LmChatOpenAi";
import { Node, type NodeProps } from "../../nodes/node";

export interface LmChatOpenAiProps extends NodeProps {
    readonly parameters: LmChatOpenAiNodeParameters;
    readonly openAiApiCredentials: Credentials<OpenAiApiCredentials>;
}

/**
 * For advanced usage with an AI chain
 */
export class LmChatOpenAi<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatOpenAi" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props: LmChatOpenAiProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.openAiApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
