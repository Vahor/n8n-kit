// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ScheduleTriggerNodeParameters } from "../nodes/ScheduleTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface ScheduleTriggerProps extends NodeProps, ScheduleTriggerNodeParameters {


}

export class ScheduleTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.scheduleTrigger" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, public readonly props?: ScheduleTriggerProps) {

        super(id, props);

    }

    override getParameters() : ScheduleTriggerNodeParameters {

        return this.props ?? {};

    }


}
