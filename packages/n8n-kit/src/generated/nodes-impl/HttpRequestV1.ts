// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { HttpDigestAuthCredentials } from "../credentials/HttpDigestAuth.ts";
import type { HttpHeaderAuthCredentials } from "../credentials/HttpHeaderAuth.ts";
import type { HttpQueryAuthCredentials } from "../credentials/HttpQueryAuth.ts";
import type { OAuth1ApiCredentials } from "../credentials/OAuth1Api.ts";
import type { OAuth2ApiCredentials } from "../credentials/OAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { HttpRequestV1NodeParameters } from "../nodes/HttpRequestV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface HttpRequestV1Props extends NodeProps {
    readonly parameters: HttpRequestV1NodeParameters;
    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;
    readonly httpDigestAuthCredentials?: Credentials<HttpDigestAuthCredentials>;
    readonly httpHeaderAuthCredentials?: Credentials<HttpHeaderAuthCredentials>;
    readonly httpQueryAuthCredentials?: Credentials<HttpQueryAuthCredentials>;
    readonly oAuth1ApiCredentials?: Credentials<OAuth1ApiCredentials>;
    readonly oAuth2ApiCredentials?: Credentials<OAuth2ApiCredentials>;
}

/**
 * Makes an HTTP request and returns the response data
 */
export class HttpRequestV1<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.httpRequest" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: HttpRequestV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.httpBasicAuthCredentials, this.props!.httpDigestAuthCredentials, this.props!.httpHeaderAuthCredentials, this.props!.httpQueryAuthCredentials, this.props!.oAuth1ApiCredentials, this.props!.oAuth2ApiCredentials];
    }

}
