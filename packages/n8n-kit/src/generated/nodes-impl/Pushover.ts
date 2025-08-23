// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PushoverApiCredentials } from "../credentials/PushoverApi.ts";
import type { Credentials } from "../../credentials";
import type { PushoverNodeParameters } from "../nodes/Pushover";
import { Node, type NodeProps } from "../../nodes";

export interface PushoverProps extends NodeProps {
    readonly parameters: PushoverNodeParameters;
    readonly pushoverApiCredentials: Credentials<PushoverApiCredentials>;
}

/**
 * Consume Pushover API
 */
export class Pushover<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.pushover" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PushoverProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.pushoverApiCredentials];
    }

}
