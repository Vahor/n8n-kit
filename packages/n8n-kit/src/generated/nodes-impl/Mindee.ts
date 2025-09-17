// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MindeeReceiptApiCredentials } from "../credentials/MindeeReceiptApi.ts";
import type { MindeeInvoiceApiCredentials } from "../credentials/MindeeInvoiceApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MindeeNodeParameters } from "../nodes/Mindee";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MindeeProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MindeeNodeParameters;
    readonly mindeeReceiptApiCredentials?: Credentials<MindeeReceiptApiCredentials>;
    readonly mindeeInvoiceApiCredentials?: Credentials<MindeeInvoiceApiCredentials>;
}

/**
 * Consume Mindee API
 */
export class Mindee<L extends string, C extends IContext = never, P extends MindeeProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.mindee" as const;
    protected typeVersion = 3 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.mindeeReceiptApiCredentials, this.props?.mindeeInvoiceApiCredentials];
    }

}
