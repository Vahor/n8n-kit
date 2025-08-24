// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MindeeReceiptApiCredentials } from "../credentials/MindeeReceiptApi.ts";
import type { MindeeInvoiceApiCredentials } from "../credentials/MindeeInvoiceApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MindeeNodeParameters } from "../nodes/Mindee";
import { Node, type NodeProps } from "../../nodes/node";

export interface MindeeProps extends NodeProps {
    readonly parameters: MindeeNodeParameters;
    readonly mindeeReceiptApiCredentials?: Credentials<MindeeReceiptApiCredentials>;
    readonly mindeeInvoiceApiCredentials?: Credentials<MindeeInvoiceApiCredentials>;
}

/**
 * Consume Mindee API
 */
export class Mindee<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.mindee" as const;
    protected typeVersion = 3 as const;

    constructor(id: L, override props?: MindeeProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mindeeReceiptApiCredentials, this.props!.mindeeInvoiceApiCredentials];
    }

}
