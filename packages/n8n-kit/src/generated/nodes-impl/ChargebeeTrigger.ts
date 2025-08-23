// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ChargebeeTriggerNodeParameters } from "../nodes/ChargebeeTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface ChargebeeTriggerProps extends NodeProps, ChargebeeTriggerNodeParameters {


}

export class ChargebeeTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.chargebeeTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ChargebeeTriggerProps) {

        super(id, props);

    }

    override getParameters() : ChargebeeTriggerNodeParameters {

        return this.props ?? {};

    }


}
