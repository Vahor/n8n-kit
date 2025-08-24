// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OllamaApiCredentials } from "../credentials/OllamaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatOllamaNodeParameters } from "../nodes/LmChatOllama";
import { Node, type NodeProps } from "../../nodes/node";

export interface LmChatOllamaProps extends NodeProps {
    readonly parameters: LmChatOllamaNodeParameters;
    readonly ollamaApiCredentials: Credentials<OllamaApiCredentials>;
}

/**
 * Language Model Ollama
 */
export class LmChatOllama<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatOllama" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LmChatOllamaProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.ollamaApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
