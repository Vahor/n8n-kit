// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { N8nApiCredentials } from "../credentials/N8nApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { N8nNodeParameters } from "../nodes/N8n";
import { Node, type NodeProps } from "../../nodes/node";

export interface N8nProps extends NodeProps {
    readonly parameters: N8nNodeParameters;
    readonly n8NApiCredentials: Credentials<N8nApiCredentials>;
}

/**
 * Handle events and perform actions on your n8n instance
 */
export class N8n<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.n8n" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: N8nProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.n8NApiCredentials];
    }

}
