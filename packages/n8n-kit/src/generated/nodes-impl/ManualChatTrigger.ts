// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ManualChatTriggerNodeParameters } from "../nodes/ManualChatTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface ManualChatTriggerProps extends NodeProps {

    readonly parameters: ManualChatTriggerNodeParameters;

}

/**
 * Runs the flow on new manual chat message
 */
export class ManualChatTrigger<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.manualChatTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: ManualChatTriggerProps) {

        super(id, props);

    }


}
