// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleBooksOAuth2ApiCredentials } from "../credentials/GoogleBooksOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleBooksNodeParameters } from "../nodes/GoogleBooks";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleBooksProps extends NodeProps {

    readonly parameters: GoogleBooksNodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleBooksOAuth2ApiCredentials?: Credentials<GoogleBooksOAuth2ApiCredentials>;

}

/**
 * Read data from Google Books
 */
export class GoogleBooks<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleBooks" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: GoogleBooksProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.googleApiCredentials, this.props!.googleBooksOAuth2ApiCredentials];

    }


}
