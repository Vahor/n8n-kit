// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CustomerIoApiCredentials } from "../credentials/CustomerIoApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CustomerIoTriggerNodeParameters } from "../nodes/CustomerIoTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CustomerIoTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CustomerIoTriggerNodeParameters;
    readonly customerIoApiCredentials: Credentials<CustomerIoApiCredentials>;
}

/**
 * Starts the workflow on a Customer.io update (Beta)
 */
export class CustomerIoTrigger<L extends string, C extends IContext = never, P extends CustomerIoTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.customerIoTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.customerIoApiCredentials];
    }

}
