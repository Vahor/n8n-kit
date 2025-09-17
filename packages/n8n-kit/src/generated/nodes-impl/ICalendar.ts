// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ICalendarNodeParameters } from "../nodes/ICalendar";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ICalendarProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ICalendarNodeParameters;
}

/**
 * Create iCalendar file
 */
export class ICalendar<L extends string, C extends IContext = never, P extends ICalendarProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.iCal" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
