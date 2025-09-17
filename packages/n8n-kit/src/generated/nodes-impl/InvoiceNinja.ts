// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { InvoiceNinjaApiCredentials } from "../credentials/InvoiceNinjaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { InvoiceNinjaNodeParameters } from "../nodes/InvoiceNinja";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface InvoiceNinjaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: InvoiceNinjaNodeParameters;
    readonly invoiceNinjaApiCredentials: Credentials<InvoiceNinjaApiCredentials>;
}

/**
 * Consume Invoice Ninja API
 */
export class InvoiceNinja<L extends string, C extends IContext = never, P extends InvoiceNinjaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.invoiceNinja" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.invoiceNinjaApiCredentials];
    }

}
