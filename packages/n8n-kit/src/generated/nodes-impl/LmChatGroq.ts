// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GroqApiCredentials } from "../credentials/GroqApi.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { LmChatGroqNodeParameters } from "../nodes/LmChatGroq";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatGroqProps extends NodeProps {
    readonly parameters: LmChatGroqNodeParameters;
    readonly groqApiCredentials: Credentials<GroqApiCredentials>;
}

/**
 * Language Model Groq
 */
export class LmChatGroq<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatGroq" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LmChatGroqProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.groqApiCredentials];
    }

    public aiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
