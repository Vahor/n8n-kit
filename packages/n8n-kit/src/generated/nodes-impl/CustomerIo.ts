// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CustomerIoApiCredentials } from "../credentials/CustomerIoApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CustomerIoNodeParameters } from "../nodes/CustomerIo";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CustomerIoProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CustomerIoNodeParameters;
    readonly customerIoApiCredentials: Credentials<CustomerIoApiCredentials>;
}

/**
 * Consume Customer.io API
 */
export class CustomerIo<L extends string, C extends IContext = never, P extends CustomerIoProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.customerIo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.customerIoApiCredentials];
    }

}
