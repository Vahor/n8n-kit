// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { InvoiceNinjaApiCredentials } from "../credentials/InvoiceNinjaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { InvoiceNinjaNodeParameters } from "../nodes/InvoiceNinja";
import { Node, type NodeProps } from "../../nodes/node";

export interface InvoiceNinjaProps extends NodeProps {
    readonly parameters: InvoiceNinjaNodeParameters;
    readonly invoiceNinjaApiCredentials: Credentials<InvoiceNinjaApiCredentials>;
}

/**
 * Consume Invoice Ninja API
 */
export class InvoiceNinja<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.invoiceNinja" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: InvoiceNinjaProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.invoiceNinjaApiCredentials];
    }

}
