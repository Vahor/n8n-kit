// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { HttpDigestAuthCredentials } from "../credentials/HttpDigestAuth.ts";
import type { HttpHeaderAuthCredentials } from "../credentials/HttpHeaderAuth.ts";
import type { HttpQueryAuthCredentials } from "../credentials/HttpQueryAuth.ts";
import type { OAuth1ApiCredentials } from "../credentials/OAuth1Api.ts";
import type { OAuth2ApiCredentials } from "../credentials/OAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { HttpRequestV1NodeParameters } from "../nodes/HttpRequestV1";
import { Node, type NodeProps } from "../../nodes";

export interface HttpRequestV1Props extends NodeProps, HttpRequestV1NodeParameters {

    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;
    readonly httpDigestAuthCredentials?: Credentials<HttpDigestAuthCredentials>;
    readonly httpHeaderAuthCredentials?: Credentials<HttpHeaderAuthCredentials>;
    readonly httpQueryAuthCredentials?: Credentials<HttpQueryAuthCredentials>;
    readonly oAuth1ApiCredentials?: Credentials<OAuth1ApiCredentials>;
    readonly oAuth2ApiCredentials?: Credentials<OAuth2ApiCredentials>;

}

export class HttpRequestV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: HttpRequestV1Props) {

        super(id, props);

    }

    override getParameters() : Omit<HttpRequestV1NodeParameters, "httpBasicAuthCredentials | httpDigestAuthCredentials | httpHeaderAuthCredentials | httpQueryAuthCredentials | oAuth1ApiCredentials | oAuth2ApiCredentials"> {

        const { httpBasicAuthCredentials:_0, httpDigestAuthCredentials:_1, httpHeaderAuthCredentials:_2, httpQueryAuthCredentials:_3, oAuth1ApiCredentials:_4, oAuth2ApiCredentials:_5, ...rest } = this.props ?? {};
        return rest;

    }

    override getCredentials() {

        return [this.props?.httpBasicAuthCredentials, this.props?.httpDigestAuthCredentials, this.props?.httpHeaderAuthCredentials, this.props?.httpQueryAuthCredentials, this.props?.oAuth1ApiCredentials, this.props?.oAuth2ApiCredentials];

    }


}
