// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsGoogleVertexNodeParameters } from "../nodes/EmbeddingsGoogleVertex";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsGoogleVertexProps extends NodeProps {

    readonly parameters: EmbeddingsGoogleVertexNodeParameters;
    readonly googleApiCredentials: Credentials<GoogleApiCredentials>;

}

/**
 * Use Google Vertex Embeddings
 */
export class EmbeddingsGoogleVertex<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.embeddingsGoogleVertex" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: EmbeddingsGoogleVertexProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.googleApiCredentials];

    }


}
