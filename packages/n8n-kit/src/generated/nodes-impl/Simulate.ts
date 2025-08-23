// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SimulateNodeParameters } from "../nodes/Simulate";
import { Node, type NodeProps } from "../../nodes";

export interface SimulateProps extends NodeProps, SimulateNodeParameters {


}

export class Simulate<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.simulate" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: SimulateProps) {

        super(id, props);

    }

    override getParameters() : SimulateNodeParameters {

        return this.props ?? {};

    }


}

