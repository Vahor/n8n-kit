// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsGoogleVertexNodeParameters } from "../nodes/EmbeddingsGoogleVertex";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsGoogleVertexProps extends NodeProps, EmbeddingsGoogleVertexNodeParameters {

    readonly googleApiCredentials: Credentials<GoogleApiCredentials>;

}

export class EmbeddingsGoogleVertex<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.embeddingsGoogleVertex" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmbeddingsGoogleVertexProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmbeddingsGoogleVertexNodeParameters, "googleApiCredentials"> {

        const { googleApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleApiCredentials];

    }


}
