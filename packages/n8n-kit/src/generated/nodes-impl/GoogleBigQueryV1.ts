// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleBigQueryOAuth2ApiCredentials } from "../credentials/GoogleBigQueryOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleBigQueryV1NodeParameters } from "../nodes/GoogleBigQueryV1";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleBigQueryV1Props extends NodeProps, GoogleBigQueryV1NodeParameters {

    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleBigQueryOAuth2ApiCredentials?: Credentials<GoogleBigQueryOAuth2ApiCredentials>;

}

export class GoogleBigQueryV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleBigQuery" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: GoogleBigQueryV1Props) {

        super(id, props);

    }

    override getParameters() : Omit<GoogleBigQueryV1NodeParameters, "googleApiCredentials | googleBigQueryOAuth2ApiCredentials"> {

        const { googleApiCredentials:_0, googleBigQueryOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleApiCredentials, this.props.googleBigQueryOAuth2ApiCredentials];

    }


}

