// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MistralCloudApiCredentials } from "../credentials/MistralCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { EmbeddingsMistralCloudNodeParameters } from "../nodes/EmbeddingsMistralCloud";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface EmbeddingsMistralCloudProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: EmbeddingsMistralCloudNodeParameters;
    readonly mistralCloudApiCredentials: Credentials<MistralCloudApiCredentials>;
}

/**
 * Use Embeddings Mistral Cloud
 */
export class EmbeddingsMistralCloud<L extends string, C extends IContext = never, P extends EmbeddingsMistralCloudProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.embeddingsMistralCloud" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mistralCloudApiCredentials];
    }

    public toAiEmbedding(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_embedding" });
        return this;
    }

}
