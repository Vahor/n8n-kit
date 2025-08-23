// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CustomerIoApiCredentials } from "../credentials/CustomerIoApi.ts";
import type { Credentials } from "../../credentials";
import type { CustomerIoTriggerNodeParameters } from "../nodes/CustomerIoTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface CustomerIoTriggerProps extends NodeProps, CustomerIoTriggerNodeParameters {

    readonly customerIoApiCredentials: Credentials<CustomerIoApiCredentials>;

}

export class CustomerIoTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.customerIoTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: CustomerIoTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<CustomerIoTriggerNodeParameters, "customerIoApiCredentials"> {

        const { customerIoApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.customerIoApiCredentials];

    }


}

