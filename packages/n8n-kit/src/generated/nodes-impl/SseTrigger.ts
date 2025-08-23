// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SseTriggerNodeParameters } from "../nodes/SseTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface SseTriggerProps extends NodeProps, SseTriggerNodeParameters {


}

export class SseTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.sseTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: SseTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

