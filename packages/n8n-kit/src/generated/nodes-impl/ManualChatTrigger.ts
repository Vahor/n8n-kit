// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ManualChatTriggerNodeParameters } from "../nodes/ManualChatTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface ManualChatTriggerProps extends NodeProps, ManualChatTriggerNodeParameters {


}

export class ManualChatTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.manualChatTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: ManualChatTriggerProps) {

        super(id, props);

    }

    override getParameters() : ManualChatTriggerNodeParameters {

        return this.props ?? {};

    }


}
