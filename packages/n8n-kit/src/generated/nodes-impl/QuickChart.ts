// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { QuickChartNodeParameters } from "../nodes/QuickChart";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface QuickChartProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: QuickChartNodeParameters;
}

/**
 * Create a chart via QuickChart
 */
export class QuickChart<L extends string, C extends IContext = never, P extends QuickChartProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.quickChart" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
