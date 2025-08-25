// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { QuickChartNodeParameters } from "../nodes/QuickChart";
import { Node, type NodeProps } from "../../nodes/node";

export interface QuickChartProps extends NodeProps {
    readonly parameters: QuickChartNodeParameters;
}

/**
 * Create a chart via QuickChart
 */
export class QuickChart<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.quickChart" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: QuickChartProps) {
        super(id, props);
    }

}
