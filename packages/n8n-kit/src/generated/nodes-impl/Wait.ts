// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { HttpHeaderAuthCredentials } from "../credentials/HttpHeaderAuth.ts";
import type { JwtAuthCredentials } from "../credentials/JwtAuth.ts";
import type { Credentials } from "../../credentials";
import type { WaitNodeParameters } from "../nodes/Wait";
import { Node, type NodeProps } from "../../nodes";

export interface WaitProps extends NodeProps {

    readonly parameters: WaitNodeParameters;
    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;
    readonly httpHeaderAuthCredentials?: Credentials<HttpHeaderAuthCredentials>;
    readonly jwtAuthCredentials?: Credentials<JwtAuthCredentials>;

}

export class Wait<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.wait" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: WaitProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.httpBasicAuthCredentials, this.props!.httpHeaderAuthCredentials, this.props!.jwtAuthCredentials];

    }


}
