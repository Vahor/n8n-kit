// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenAiApiCredentials } from "../credentials/OpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { EmbeddingsOpenAiNodeParameters } from "../nodes/EmbeddingsOpenAi";
import { Node, type NodeProps } from "../../nodes/node";

export interface EmbeddingsOpenAiProps extends NodeProps {
    readonly parameters: EmbeddingsOpenAiNodeParameters;
    readonly openAiApiCredentials: Credentials<OpenAiApiCredentials>;
}

/**
 * Use Embeddings OpenAI
 */
export class EmbeddingsOpenAi<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.embeddingsOpenAi" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props: EmbeddingsOpenAiProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.openAiApiCredentials];
    }

    public toAiEmbedding(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_embedding" });
        return this;
    }

}
