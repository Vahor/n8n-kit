// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ManualChatTriggerAINodeParameters } from "../nodes/ManualChatTriggerAI";
import { Node, type NodeProps } from "../../nodes";

export interface ManualChatTriggerAIProps extends NodeProps, ManualChatTriggerAINodeParameters {


}

export class ManualChatTriggerAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.manualChatTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: ManualChatTriggerAIProps) {

        super(id, props);

    }

    override getParameters() : ManualChatTriggerAINodeParameters {

        return this.props ?? {};

    }


}
