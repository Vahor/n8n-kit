// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OllamaApiCredentials } from "../credentials/OllamaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatOllamaNodeParameters } from "../nodes/LmChatOllama";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LmChatOllamaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LmChatOllamaNodeParameters;
    readonly ollamaApiCredentials: Credentials<OllamaApiCredentials>;
}

/**
 * Language Model Ollama
 */
export class LmChatOllama<L extends string, C extends IContext = never, P extends LmChatOllamaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatOllama" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.ollamaApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
