// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VenafiTlsProtectCloudApiCredentials } from "../credentials/VenafiTlsProtectCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { VenafiTlsProtectCloudTriggerNodeParameters } from "../nodes/VenafiTlsProtectCloudTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface VenafiTlsProtectCloudTriggerProps extends NodeProps {
    readonly parameters: VenafiTlsProtectCloudTriggerNodeParameters;
    readonly venafiTlsProtectCloudApiCredentials: Credentials<VenafiTlsProtectCloudApiCredentials>;
}

/**
 * Starts the workflow when Venafi events occur
 */
export class VenafiTlsProtectCloudTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.venafiTlsProtectCloudTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: VenafiTlsProtectCloudTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.venafiTlsProtectCloudApiCredentials];
    }

}
