// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { QuickChartNodeParameters } from "../nodes/QuickChart";
import { Node, type NodeProps } from "../../nodes";

export interface QuickChartProps extends NodeProps {

    readonly parameters: QuickChartNodeParameters;

}

export class QuickChart<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.quickChart" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: QuickChartProps) {

        super(id, props);

    }


}
