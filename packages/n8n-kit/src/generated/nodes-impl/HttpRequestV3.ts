// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpSslAuthCredentials } from "../credentials/HttpSslAuth.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { HttpRequestV3NodeParameters } from "../nodes/HttpRequestV3";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface HttpRequestV3Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: HttpRequestV3NodeParameters;
    readonly httpSslAuthCredentials?: Credentials<HttpSslAuthCredentials>;
}

/**
 * Makes an HTTP request and returns the response data
 */
export class HttpRequestV3<L extends string, C extends IContext = never, P extends HttpRequestV3Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.httpRequest" as const;
    protected typeVersion = 4.2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.httpSslAuthCredentials];
    }

}
