// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TogglApiCredentials } from "../credentials/TogglApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TogglTriggerNodeParameters } from "../nodes/TogglTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface TogglTriggerProps extends NodeProps {
    readonly parameters: TogglTriggerNodeParameters;
    readonly togglApiCredentials: Credentials<TogglApiCredentials>;
}

/**
 * Starts the workflow when Toggl events occur
 */
export class TogglTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.togglTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TogglTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.togglApiCredentials];
    }

}
