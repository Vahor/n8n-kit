// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { HttpHeaderAuthCredentials } from "../credentials/HttpHeaderAuth.ts";
import type { JwtAuthCredentials } from "../credentials/JwtAuth.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WaitNodeParameters } from "../nodes/Wait";
import { Node, type NodeProps } from "../../nodes/node";

export interface WaitProps extends NodeProps {
    readonly parameters: WaitNodeParameters;
    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;
    readonly httpHeaderAuthCredentials?: Credentials<HttpHeaderAuthCredentials>;
    readonly jwtAuthCredentials?: Credentials<JwtAuthCredentials>;
}

/**
 * Wait before continue with execution
 */
export class Wait<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.wait" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: WaitProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.httpBasicAuthCredentials, this.props!.httpHeaderAuthCredentials, this.props!.jwtAuthCredentials];
    }

}
