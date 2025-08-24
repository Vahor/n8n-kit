// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { InvoiceNinjaApiCredentials } from "../credentials/InvoiceNinjaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { InvoiceNinjaTriggerNodeParameters } from "../nodes/InvoiceNinjaTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface InvoiceNinjaTriggerProps extends NodeProps {
    readonly parameters: InvoiceNinjaTriggerNodeParameters;
    readonly invoiceNinjaApiCredentials: Credentials<InvoiceNinjaApiCredentials>;
}

/**
 * Starts the workflow when Invoice Ninja events occur
 */
export class InvoiceNinjaTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.invoiceNinjaTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: InvoiceNinjaTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.invoiceNinjaApiCredentials];
    }

}
