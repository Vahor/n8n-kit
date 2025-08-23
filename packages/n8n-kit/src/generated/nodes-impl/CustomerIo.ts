// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CustomerIoApiCredentials } from "../credentials/CustomerIoApi.ts";
import type { Credentials } from "../../credentials";
import type { CustomerIoNodeParameters } from "../nodes/CustomerIo";
import { Node, type NodeProps } from "../../nodes";

export interface CustomerIoProps extends NodeProps, CustomerIoNodeParameters {

    readonly customerIoApiCredentials: Credentials<CustomerIoApiCredentials>;

}

export class CustomerIo<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.customerIo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: CustomerIoProps) {

        super(id, props);

    }

    override getParameters() : Omit<CustomerIoNodeParameters, "customerIoApiCredentials"> {

        const { customerIoApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.customerIoApiCredentials];

    }


}

