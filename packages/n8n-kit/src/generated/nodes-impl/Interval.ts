// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IntervalNodeParameters } from "../nodes/Interval";
import { Node, type NodeProps } from "../../nodes";

export interface IntervalProps extends NodeProps, IntervalNodeParameters {


}

export class Interval<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.interval" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: IntervalProps) {

        super(id, props);

    }

    override getParameters() : IntervalNodeParameters {

        return this.props ?? {};

    }


}

