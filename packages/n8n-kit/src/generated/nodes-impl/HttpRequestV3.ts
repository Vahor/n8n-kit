// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpSslAuthCredentials } from "../credentials/HttpSslAuth.ts";
import type { Credentials } from "../../credentials";
import type { HttpRequestV3NodeParameters } from "../nodes/HttpRequestV3";
import { Node, type NodeProps } from "../../nodes";

export interface HttpRequestV3Props extends NodeProps, HttpRequestV3NodeParameters {

    readonly httpSslAuthCredentials?: Credentials<HttpSslAuthCredentials>;

}

export class HttpRequestV3<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.httpRequest" as const;
    protected typeVersion = 4.2 as const;

    constructor(id: L, public readonly props?: HttpRequestV3Props) {

        super(id, props);

    }

    override getParameters() : Omit<HttpRequestV3NodeParameters, "httpSslAuthCredentials"> {

        const { httpSslAuthCredentials:_0, ...rest } = this.props ?? {};
        return rest;

    }

    override getCredentials() {

        return [this.props?.httpSslAuthCredentials];

    }


}
