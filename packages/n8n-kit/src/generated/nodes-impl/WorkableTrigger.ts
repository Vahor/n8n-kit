// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WorkableApiCredentials } from "../credentials/WorkableApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WorkableTriggerNodeParameters } from "../nodes/WorkableTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WorkableTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WorkableTriggerNodeParameters;
    readonly workableApiCredentials: Credentials<WorkableApiCredentials>;
}

/**
 * Starts the workflow when Workable events occur
 */
export class WorkableTrigger<L extends string, C extends IContext = never, P extends WorkableTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.workableTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.workableApiCredentials];
    }

}
