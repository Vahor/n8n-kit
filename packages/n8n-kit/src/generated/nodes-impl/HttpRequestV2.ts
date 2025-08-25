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
import type { HttpRequestV2NodeParameters } from "../nodes/HttpRequestV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface HttpRequestV2Props extends NodeProps {
    readonly parameters: HttpRequestV2NodeParameters;
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
export class HttpRequestV2<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.httpRequest" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: HttpRequestV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.httpBasicAuthCredentials, this.props!.httpDigestAuthCredentials, this.props!.httpHeaderAuthCredentials, this.props!.httpQueryAuthCredentials, this.props!.oAuth1ApiCredentials, this.props!.oAuth2ApiCredentials];
    }

}
