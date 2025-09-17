// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { CronNodeParameters } from "../nodes/Cron";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CronProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CronNodeParameters;
}

/**
 * Triggers the workflow at a specific time
 */
export class Cron<L extends string, C extends IContext = never, P extends CronProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.cron" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
