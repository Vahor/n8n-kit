// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GooglePalmApiCredentials } from "../credentials/GooglePalmApi.ts";
import type { Credentials } from "../../credentials";
import type { GoogleGeminiNodeParameters } from "../nodes/GoogleGemini";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleGeminiProps extends NodeProps, GoogleGeminiNodeParameters {

    readonly googlePalmApiCredentials: Credentials<GooglePalmApiCredentials>;

}

export class GoogleGemini<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleGemini" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: GoogleGeminiProps) {

        super(id, props);

    }

    override getParameters() : Omit<GoogleGeminiNodeParameters, "googlePalmApiCredentials"> {

        const { googlePalmApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googlePalmApiCredentials];

    }


}
