// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { HttpHeaderAuthCredentials } from "../credentials/HttpHeaderAuth.ts";
import type { JwtAuthCredentials } from "../credentials/JwtAuth.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WaitNodeParameters } from "../nodes/Wait";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WaitProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WaitNodeParameters;
    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;
    readonly httpHeaderAuthCredentials?: Credentials<HttpHeaderAuthCredentials>;
    readonly jwtAuthCredentials?: Credentials<JwtAuthCredentials>;
}

/**
 * Wait before continue with execution
 */
export class Wait<L extends string, C extends IContext = never, P extends WaitProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.wait" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.httpBasicAuthCredentials, this.props?.httpHeaderAuthCredentials, this.props?.jwtAuthCredentials];
    }

}
