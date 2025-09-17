// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TogglApiCredentials } from "../credentials/TogglApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TogglTriggerNodeParameters } from "../nodes/TogglTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TogglTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TogglTriggerNodeParameters;
    readonly togglApiCredentials: Credentials<TogglApiCredentials>;
}

/**
 * Starts the workflow when Toggl events occur
 */
export class TogglTrigger<L extends string, C extends IContext = never, P extends TogglTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.togglTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.togglApiCredentials];
    }

}
