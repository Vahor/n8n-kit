// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ClockifyApiCredentials } from "../credentials/ClockifyApi.ts";
import type { Credentials } from "../../credentials";
import type { ClockifyTriggerNodeParameters } from "../nodes/ClockifyTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface ClockifyTriggerProps extends NodeProps {
    readonly parameters: ClockifyTriggerNodeParameters;
    readonly clockifyApiCredentials: Credentials<ClockifyApiCredentials>;
}

/**
 * Listens to Clockify events
 */
export class ClockifyTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.clockifyTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ClockifyTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.clockifyApiCredentials];
    }

}
