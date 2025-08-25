// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleBooksOAuth2ApiCredentials } from "../credentials/GoogleBooksOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleBooksNodeParameters } from "../nodes/GoogleBooks";
import { Node, type NodeProps } from "../../nodes/node";

export interface GoogleBooksProps extends NodeProps {
    readonly parameters: GoogleBooksNodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleBooksOAuth2ApiCredentials?: Credentials<GoogleBooksOAuth2ApiCredentials>;
}

/**
 * Read data from Google Books
 */
export class GoogleBooks<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.googleBooks" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: GoogleBooksProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleApiCredentials, this.props!.googleBooksOAuth2ApiCredentials];
    }

}
