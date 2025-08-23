// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsGoogleVertexAINodeParameters } from "../nodes/EmbeddingsGoogleVertexAI";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsGoogleVertexAIProps extends NodeProps, EmbeddingsGoogleVertexAINodeParameters {

    readonly googleApiCredentials: Credentials<GoogleApiCredentials>;

}

export class EmbeddingsGoogleVertexAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.embeddingsGoogleVertex" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmbeddingsGoogleVertexAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmbeddingsGoogleVertexAINodeParameters, "googleApiCredentials"> {

        const { googleApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleApiCredentials];

    }


}

