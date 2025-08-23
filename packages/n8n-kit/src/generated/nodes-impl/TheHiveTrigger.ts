// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TheHiveTriggerNodeParameters } from "../nodes/TheHiveTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface TheHiveTriggerProps extends NodeProps, TheHiveTriggerNodeParameters {


}

export class TheHiveTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.theHiveTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props: TheHiveTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

