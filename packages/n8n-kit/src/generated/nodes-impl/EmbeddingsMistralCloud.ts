// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MistralCloudApiCredentials } from "../credentials/MistralCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { EmbeddingsMistralCloudNodeParameters } from "../nodes/EmbeddingsMistralCloud";
import { Node, type NodeProps } from "../../nodes/node";

export interface EmbeddingsMistralCloudProps extends NodeProps {
    readonly parameters: EmbeddingsMistralCloudNodeParameters;
    readonly mistralCloudApiCredentials: Credentials<MistralCloudApiCredentials>;
}

/**
 * Use Embeddings Mistral Cloud
 */
export class EmbeddingsMistralCloud<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.embeddingsMistralCloud" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: EmbeddingsMistralCloudProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mistralCloudApiCredentials];
    }

    public toAiEmbedding(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_embedding" });
        return this;
    }

}
