// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CustomerIoApiCredentials } from "../credentials/CustomerIoApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CustomerIoTriggerNodeParameters } from "../nodes/CustomerIoTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface CustomerIoTriggerProps extends NodeProps {
    readonly parameters: CustomerIoTriggerNodeParameters;
    readonly customerIoApiCredentials: Credentials<CustomerIoApiCredentials>;
}

/**
 * Starts the workflow on a Customer.io update (Beta)
 */
export class CustomerIoTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.customerIoTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: CustomerIoTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.customerIoApiCredentials];
    }

}
