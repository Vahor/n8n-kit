// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CustomerIoApiCredentials } from "../credentials/CustomerIoApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CustomerIoNodeParameters } from "../nodes/CustomerIo";
import { Node, type NodeProps } from "../../nodes/node";

export interface CustomerIoProps extends NodeProps {
    readonly parameters: CustomerIoNodeParameters;
    readonly customerIoApiCredentials: Credentials<CustomerIoApiCredentials>;
}

/**
 * Consume Customer.io API
 */
export class CustomerIo<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.customerIo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: CustomerIoProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.customerIoApiCredentials];
    }

}
