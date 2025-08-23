// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { HttpCustomAuthCredentials } from "../credentials/HttpCustomAuth.ts";
import type { HttpDigestAuthCredentials } from "../credentials/HttpDigestAuth.ts";
import type { HttpHeaderAuthCredentials } from "../credentials/HttpHeaderAuth.ts";
import type { HttpQueryAuthCredentials } from "../credentials/HttpQueryAuth.ts";
import type { OAuth1ApiCredentials } from "../credentials/OAuth1Api.ts";
import type { OAuth2ApiCredentials } from "../credentials/OAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GraphQLNodeParameters } from "../nodes/GraphQL";
import { Node, type NodeProps } from "../../nodes";

export interface GraphQLProps extends NodeProps {

    readonly parameters: GraphQLNodeParameters;
    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;
    readonly httpCustomAuthCredentials?: Credentials<HttpCustomAuthCredentials>;
    readonly httpDigestAuthCredentials?: Credentials<HttpDigestAuthCredentials>;
    readonly httpHeaderAuthCredentials?: Credentials<HttpHeaderAuthCredentials>;
    readonly httpQueryAuthCredentials?: Credentials<HttpQueryAuthCredentials>;
    readonly oAuth1ApiCredentials?: Credentials<OAuth1ApiCredentials>;
    readonly oAuth2ApiCredentials?: Credentials<OAuth2ApiCredentials>;

}

/**
 * Makes a GraphQL request and returns the received data
 */
export class GraphQL<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.graphql" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: GraphQLProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.httpBasicAuthCredentials, this.props!.httpCustomAuthCredentials, this.props!.httpDigestAuthCredentials, this.props!.httpHeaderAuthCredentials, this.props!.httpQueryAuthCredentials, this.props!.oAuth1ApiCredentials, this.props!.oAuth2ApiCredentials];

    }


}
