// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GooglePalmApiCredentials } from "../credentials/GooglePalmApi.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsGoogleGeminiAINodeParameters } from "../nodes/EmbeddingsGoogleGeminiAI";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsGoogleGeminiAIProps extends NodeProps, EmbeddingsGoogleGeminiAINodeParameters {

    readonly googlePalmApiCredentials: Credentials<GooglePalmApiCredentials>;

}

export class EmbeddingsGoogleGeminiAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.embeddingsGoogleGemini" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmbeddingsGoogleGeminiAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmbeddingsGoogleGeminiAINodeParameters, "googlePalmApiCredentials"> {

        const { googlePalmApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googlePalmApiCredentials];

    }


}

