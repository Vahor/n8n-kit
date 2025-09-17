// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { DateTimeV2NodeParameters } from "../nodes/DateTimeV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DateTimeV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DateTimeV2NodeParameters;
}

/**
 * Manipulate date and time values
 */
export class DateTimeV2<L extends string, C extends IContext = never, P extends DateTimeV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.dateTime" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
