// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { DateTimeV1NodeParameters } from "../nodes/DateTimeV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface DateTimeV1Props extends NodeProps {
    readonly parameters: DateTimeV1NodeParameters;
}

/**
 * Allows you to manipulate date and time values
 */
export class DateTimeV1<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.dateTime" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: DateTimeV1Props) {
        super(id, props);
    }

}
