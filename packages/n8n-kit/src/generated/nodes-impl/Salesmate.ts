// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SalesmateApiCredentials } from "../credentials/SalesmateApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SalesmateNodeParameters } from "../nodes/Salesmate";
import { Node, type NodeProps } from "../../nodes/node";

export interface SalesmateProps extends NodeProps {
    readonly parameters: SalesmateNodeParameters;
    readonly salesmateApiCredentials: Credentials<SalesmateApiCredentials>;
}

/**
 * Consume Salesmate API
 */
export class Salesmate<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.salesmate" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: SalesmateProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.salesmateApiCredentials];
    }

}
