// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SimulateTriggerNodeParameters } from "../nodes/SimulateTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface SimulateTriggerProps extends NodeProps, SimulateTriggerNodeParameters {


}

export class SimulateTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.simulateTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: SimulateTriggerProps) {

        super(id, props);

    }

    override getParameters() : SimulateTriggerNodeParameters {

        return this.props ?? {};

    }


}
