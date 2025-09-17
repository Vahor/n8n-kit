// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { InvoiceNinjaApiCredentials } from "../credentials/InvoiceNinjaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { InvoiceNinjaTriggerNodeParameters } from "../nodes/InvoiceNinjaTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface InvoiceNinjaTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: InvoiceNinjaTriggerNodeParameters;
    readonly invoiceNinjaApiCredentials: Credentials<InvoiceNinjaApiCredentials>;
}

/**
 * Starts the workflow when Invoice Ninja events occur
 */
export class InvoiceNinjaTrigger<L extends string, C extends IContext = never, P extends InvoiceNinjaTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.invoiceNinjaTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.invoiceNinjaApiCredentials];
    }

}
