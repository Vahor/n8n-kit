// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { N8nTriggerNodeParameters } from "../nodes/N8nTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface N8nTriggerProps extends NodeProps {
    readonly parameters: N8nTriggerNodeParameters;
}

/**
 * Handle events and perform actions on your n8n instance
 */
export class N8nTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.n8nTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: N8nTriggerProps) {
        super(id, props);
    }

}
