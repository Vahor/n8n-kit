// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { QuickBooksOAuth2ApiCredentials } from "../credentials/QuickBooksOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { QuickBooksNodeParameters } from "../nodes/QuickBooks";
import { Node, type NodeProps } from "../../nodes/node";

export interface QuickBooksProps extends NodeProps {
    readonly parameters: QuickBooksNodeParameters;
    readonly quickBooksOAuth2ApiCredentials: Credentials<QuickBooksOAuth2ApiCredentials>;
}

/**
 * Consume the QuickBooks Online API
 */
export class QuickBooks<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.quickbooks" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: QuickBooksProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.quickBooksOAuth2ApiCredentials];
    }

}
