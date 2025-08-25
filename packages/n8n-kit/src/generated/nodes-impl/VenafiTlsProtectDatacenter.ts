// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VenafiTlsProtectDatacenterApiCredentials } from "../credentials/VenafiTlsProtectDatacenterApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { VenafiTlsProtectDatacenterNodeParameters } from "../nodes/VenafiTlsProtectDatacenter";
import { Node, type NodeProps } from "../../nodes/node";

export interface VenafiTlsProtectDatacenterProps extends NodeProps {
    readonly parameters: VenafiTlsProtectDatacenterNodeParameters;
    readonly venafiTlsProtectDatacenterApiCredentials: Credentials<VenafiTlsProtectDatacenterApiCredentials>;
}

/**
 * Consume Venafi TLS Protect Datacenter
 */
export class VenafiTlsProtectDatacenter<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.venafiTlsProtectDatacenter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: VenafiTlsProtectDatacenterProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.venafiTlsProtectDatacenterApiCredentials];
    }

}
