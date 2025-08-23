// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GooglePalmApiCredentials } from "../credentials/GooglePalmApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatGoogleGeminiNodeParameters } from "../nodes/LmChatGoogleGemini";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatGoogleGeminiProps extends NodeProps, LmChatGoogleGeminiNodeParameters {

    readonly googlePalmApiCredentials: Credentials<GooglePalmApiCredentials>;

}

export class LmChatGoogleGemini<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatGoogleGemini" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmChatGoogleGeminiProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatGoogleGeminiNodeParameters, "googlePalmApiCredentials"> {

        const { googlePalmApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googlePalmApiCredentials];

    }


}
