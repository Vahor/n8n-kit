// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ManualChatTriggerNodeParameters } from "../nodes/ManualChatTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface ManualChatTriggerProps extends NodeProps {
    readonly parameters: ManualChatTriggerNodeParameters;
}

/**
 * Runs the flow on new manual chat message
 */
export class ManualChatTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.manualChatTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: ManualChatTriggerProps) {
        super(id, props);
    }

}
