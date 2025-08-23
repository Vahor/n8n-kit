// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { InvoiceNinjaApiCredentials } from "../credentials/InvoiceNinjaApi.ts";
import type { Credentials } from "../../credentials";
import type { InvoiceNinjaTriggerNodeParameters } from "../nodes/InvoiceNinjaTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface InvoiceNinjaTriggerProps extends NodeProps, InvoiceNinjaTriggerNodeParameters {

    readonly invoiceNinjaApiCredentials: Credentials<InvoiceNinjaApiCredentials>;

}

export class InvoiceNinjaTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.invoiceNinjaTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props: InvoiceNinjaTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<InvoiceNinjaTriggerNodeParameters, "invoiceNinjaApiCredentials"> {

        const { invoiceNinjaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.invoiceNinjaApiCredentials];

    }


}
