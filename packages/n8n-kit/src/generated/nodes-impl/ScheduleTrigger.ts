// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ScheduleTriggerNodeParameters } from "../nodes/ScheduleTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ScheduleTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ScheduleTriggerNodeParameters;
}

/**
 * Triggers the workflow on a given schedule
 */
export class ScheduleTrigger<L extends string, C extends IContext = never, P extends ScheduleTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.scheduleTrigger" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
