// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VenafiTlsProtectCloudApiCredentials } from "../credentials/VenafiTlsProtectCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { VenafiTlsProtectCloudTriggerNodeParameters } from "../nodes/VenafiTlsProtectCloudTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface VenafiTlsProtectCloudTriggerProps extends NodeProps, VenafiTlsProtectCloudTriggerNodeParameters {

    readonly venafiTlsProtectCloudApiCredentials: Credentials<VenafiTlsProtectCloudApiCredentials>;

}

export class VenafiTlsProtectCloudTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.venafiTlsProtectCloudTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: VenafiTlsProtectCloudTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { venafiTlsProtectCloudApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.venafiTlsProtectCloudApiCredentials];

    }


}

