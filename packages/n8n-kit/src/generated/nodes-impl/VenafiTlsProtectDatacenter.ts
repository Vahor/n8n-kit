// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VenafiTlsProtectDatacenterApiCredentials } from "../credentials/VenafiTlsProtectDatacenterApi.ts";
import type { Credentials } from "../../credentials";
import type { VenafiTlsProtectDatacenterNodeParameters } from "../nodes/VenafiTlsProtectDatacenter";
import { Node, type NodeProps } from "../../nodes";

export interface VenafiTlsProtectDatacenterProps extends NodeProps {
    readonly parameters: VenafiTlsProtectDatacenterNodeParameters;
    readonly venafiTlsProtectDatacenterApiCredentials: Credentials<VenafiTlsProtectDatacenterApiCredentials>;
}

/**
 * Consume Venafi TLS Protect Datacenter
 */
export class VenafiTlsProtectDatacenter<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.venafiTlsProtectDatacenter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: VenafiTlsProtectDatacenterProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.venafiTlsProtectDatacenterApiCredentials];
    }

}
