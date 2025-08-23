// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VenafiTlsProtectCloudApiCredentials } from "../credentials/VenafiTlsProtectCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { VenafiTlsProtectCloudNodeParameters } from "../nodes/VenafiTlsProtectCloud";
import { Node, type NodeProps } from "../../nodes";

export interface VenafiTlsProtectCloudProps extends NodeProps {
    readonly parameters: VenafiTlsProtectCloudNodeParameters;
    readonly venafiTlsProtectCloudApiCredentials: Credentials<VenafiTlsProtectCloudApiCredentials>;
}

/**
 * Consume Venafi TLS Protect Cloud API
 */
export class VenafiTlsProtectCloud<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.venafiTlsProtectCloud" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: VenafiTlsProtectCloudProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.venafiTlsProtectCloudApiCredentials];
    }

}
