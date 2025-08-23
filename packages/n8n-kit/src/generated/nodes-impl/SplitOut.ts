// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SplitOutNodeParameters } from "../nodes/SplitOut";
import { Node, type NodeProps } from "../../nodes";

export interface SplitOutProps extends NodeProps, SplitOutNodeParameters {


}

export class SplitOut<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.splitOut" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: SplitOutProps) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

