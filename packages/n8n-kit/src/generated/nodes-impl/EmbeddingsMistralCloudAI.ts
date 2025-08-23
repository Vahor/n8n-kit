// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MistralCloudApiCredentials } from "../credentials/MistralCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsMistralCloudAINodeParameters } from "../nodes/EmbeddingsMistralCloudAI";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsMistralCloudAIProps extends NodeProps, EmbeddingsMistralCloudAINodeParameters {

    readonly mistralCloudApiCredentials: Credentials<MistralCloudApiCredentials>;

}

export class EmbeddingsMistralCloudAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.embeddingsMistralCloud" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmbeddingsMistralCloudAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmbeddingsMistralCloudAINodeParameters, "mistralCloudApiCredentials"> {

        const { mistralCloudApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mistralCloudApiCredentials];

    }


}
