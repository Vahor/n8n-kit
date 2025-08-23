// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GooglePalmApiCredentials } from "../credentials/GooglePalmApi.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsGoogleGeminiNodeParameters } from "../nodes/EmbeddingsGoogleGemini";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsGoogleGeminiProps extends NodeProps, EmbeddingsGoogleGeminiNodeParameters {

    readonly googlePalmApiCredentials: Credentials<GooglePalmApiCredentials>;

}

export class EmbeddingsGoogleGemini<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.embeddingsGoogleGemini" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmbeddingsGoogleGeminiProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmbeddingsGoogleGeminiNodeParameters, "googlePalmApiCredentials"> {

        const { googlePalmApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googlePalmApiCredentials];

    }


}
