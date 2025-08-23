// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleBooksOAuth2ApiCredentials } from "../credentials/GoogleBooksOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleBooksNodeParameters } from "../nodes/GoogleBooks";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleBooksProps extends NodeProps, GoogleBooksNodeParameters {

    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleBooksOAuth2ApiCredentials?: Credentials<GoogleBooksOAuth2ApiCredentials>;

}

export class GoogleBooks<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleBooks" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props?: GoogleBooksProps) {

        super(id, props);

    }

    override getParameters() {

        const { googleApiCredentials:_0, googleBooksOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleApiCredentials, this.props.googleBooksOAuth2ApiCredentials];

    }


}

