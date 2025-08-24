// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AnthropicApiCredentials } from "../credentials/AnthropicApi.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { LmChatAnthropicNodeParameters } from "../nodes/LmChatAnthropic";
import { Node, type NodeProps } from "../../nodes/node";

export interface LmChatAnthropicProps extends NodeProps {
    readonly parameters: LmChatAnthropicNodeParameters;
    readonly anthropicApiCredentials: Credentials<AnthropicApiCredentials>;
}

/**
 * Language Model Anthropic
 */
export class LmChatAnthropic<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatAnthropic" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: LmChatAnthropicProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.anthropicApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
