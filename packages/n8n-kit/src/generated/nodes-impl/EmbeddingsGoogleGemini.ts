// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GooglePalmApiCredentials } from "../credentials/GooglePalmApi.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { EmbeddingsGoogleGeminiNodeParameters } from "../nodes/EmbeddingsGoogleGemini";
import { Node, type NodeProps } from "../../nodes/node";

export interface EmbeddingsGoogleGeminiProps extends NodeProps {
    readonly parameters: EmbeddingsGoogleGeminiNodeParameters;
    readonly googlePalmApiCredentials: Credentials<GooglePalmApiCredentials>;
}

/**
 * Use Google Gemini Embeddings
 */
export class EmbeddingsGoogleGemini<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.embeddingsGoogleGemini" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: EmbeddingsGoogleGeminiProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googlePalmApiCredentials];
    }

    public toAiEmbedding(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_embedding" });
        return this;
    }

}
