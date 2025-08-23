// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TogglApiCredentials } from "../credentials/TogglApi.ts";
import type { Credentials } from "../../credentials";
import type { TogglTriggerNodeParameters } from "../nodes/TogglTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface TogglTriggerProps extends NodeProps {
    readonly parameters: TogglTriggerNodeParameters;
    readonly togglApiCredentials: Credentials<TogglApiCredentials>;
}

/**
 * Starts the workflow when Toggl events occur
 */
export class TogglTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.togglTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TogglTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.togglApiCredentials];
    }

}
