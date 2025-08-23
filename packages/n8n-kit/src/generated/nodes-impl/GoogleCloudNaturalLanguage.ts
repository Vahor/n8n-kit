// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleCloudNaturalLanguageOAuth2ApiCredentials } from "../credentials/GoogleCloudNaturalLanguageOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleCloudNaturalLanguageNodeParameters } from "../nodes/GoogleCloudNaturalLanguage";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleCloudNaturalLanguageProps extends NodeProps, GoogleCloudNaturalLanguageNodeParameters {

    readonly googleCloudNaturalLanguageOAuth2ApiCredentials: Credentials<GoogleCloudNaturalLanguageOAuth2ApiCredentials>;

}

export class GoogleCloudNaturalLanguage<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleCloudNaturalLanguage" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: GoogleCloudNaturalLanguageProps) {

        super(id, props);

    }

    override getParameters() : Omit<GoogleCloudNaturalLanguageNodeParameters, "googleCloudNaturalLanguageOAuth2ApiCredentials"> {

        const { googleCloudNaturalLanguageOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleCloudNaturalLanguageOAuth2ApiCredentials];

    }


}

