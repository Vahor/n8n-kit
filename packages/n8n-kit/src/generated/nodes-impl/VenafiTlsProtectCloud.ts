// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VenafiTlsProtectCloudApiCredentials } from "../credentials/VenafiTlsProtectCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { VenafiTlsProtectCloudNodeParameters } from "../nodes/VenafiTlsProtectCloud";
import { Node, type NodeProps } from "../../nodes";

export interface VenafiTlsProtectCloudProps extends NodeProps, VenafiTlsProtectCloudNodeParameters {

    readonly venafiTlsProtectCloudApiCredentials: Credentials<VenafiTlsProtectCloudApiCredentials>;

}

export class VenafiTlsProtectCloud<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.venafiTlsProtectCloud" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: VenafiTlsProtectCloudProps) {

        super(id, props);

    }

    override getParameters() : Omit<VenafiTlsProtectCloudNodeParameters, "venafiTlsProtectCloudApiCredentials"> {

        const { venafiTlsProtectCloudApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.venafiTlsProtectCloudApiCredentials];

    }


}
