// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { TheHiveProjectTriggerNodeParameters } from "../nodes/TheHiveProjectTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TheHiveProjectTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TheHiveProjectTriggerNodeParameters;
}

/**
 * Starts the workflow when TheHive events occur
 */
export class TheHiveProjectTrigger<L extends string, C extends IContext = never, P extends TheHiveProjectTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.theHiveProjectTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
