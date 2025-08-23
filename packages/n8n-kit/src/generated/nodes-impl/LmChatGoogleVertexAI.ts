// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatGoogleVertexAINodeParameters } from "../nodes/LmChatGoogleVertexAI";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatGoogleVertexAIProps extends NodeProps, LmChatGoogleVertexAINodeParameters {

    readonly googleApiCredentials: Credentials<GoogleApiCredentials>;

}

export class LmChatGoogleVertexAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatGoogleVertex" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmChatGoogleVertexAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatGoogleVertexAINodeParameters, "googleApiCredentials"> {

        const { googleApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleApiCredentials];

    }


}

