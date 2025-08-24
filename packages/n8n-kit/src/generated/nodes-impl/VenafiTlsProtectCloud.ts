// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VenafiTlsProtectCloudApiCredentials } from "../credentials/VenafiTlsProtectCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { VenafiTlsProtectCloudNodeParameters } from "../nodes/VenafiTlsProtectCloud";
import { Node, type NodeProps } from "../../nodes/node";

export interface VenafiTlsProtectCloudProps extends NodeProps {
    readonly parameters: VenafiTlsProtectCloudNodeParameters;
    readonly venafiTlsProtectCloudApiCredentials: Credentials<VenafiTlsProtectCloudApiCredentials>;
}

/**
 * Consume Venafi TLS Protect Cloud API
 */
export class VenafiTlsProtectCloud<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.venafiTlsProtectCloud" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: VenafiTlsProtectCloudProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.venafiTlsProtectCloudApiCredentials];
    }

}
