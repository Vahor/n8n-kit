// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { HttpHeaderAuthCredentials } from "../credentials/HttpHeaderAuth.ts";
import type { JwtAuthCredentials } from "../credentials/JwtAuth.ts";
import type { Credentials } from "../../credentials";
import type { WaitNodeParameters } from "../nodes/Wait";
import { Node, type NodeProps } from "../../nodes";

export interface WaitProps extends NodeProps, WaitNodeParameters {

    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;
    readonly httpHeaderAuthCredentials?: Credentials<HttpHeaderAuthCredentials>;
    readonly jwtAuthCredentials?: Credentials<JwtAuthCredentials>;

}

export class Wait<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.wait" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: WaitProps) {

        super(id, props);

    }

    override getParameters() : Omit<WaitNodeParameters, "httpBasicAuthCredentials | httpHeaderAuthCredentials | jwtAuthCredentials"> {

        const { httpBasicAuthCredentials:_0, httpHeaderAuthCredentials:_1, jwtAuthCredentials:_2, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.httpBasicAuthCredentials, this.props.httpHeaderAuthCredentials, this.props.jwtAuthCredentials];

    }


}

