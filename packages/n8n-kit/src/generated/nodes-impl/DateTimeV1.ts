// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { DateTimeV1NodeParameters } from "../nodes/DateTimeV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DateTimeV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DateTimeV1NodeParameters;
}

/**
 * Allows you to manipulate date and time values
 */
export class DateTimeV1<L extends string, C extends IContext = never, P extends DateTimeV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.dateTime" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
