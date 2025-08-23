// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KeapOAuth2ApiCredentials } from "../credentials/KeapOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { KeapTriggerNodeParameters } from "../nodes/KeapTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface KeapTriggerProps extends NodeProps {
    readonly parameters: KeapTriggerNodeParameters;
    readonly keapOAuth2ApiCredentials: Credentials<KeapOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Infusionsoft events occur
 */
export class KeapTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.keapTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: KeapTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.keapOAuth2ApiCredentials];
    }

}
