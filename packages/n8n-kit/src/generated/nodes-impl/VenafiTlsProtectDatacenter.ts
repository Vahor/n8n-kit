// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VenafiTlsProtectDatacenterApiCredentials } from "../credentials/VenafiTlsProtectDatacenterApi.ts";
import type { Credentials } from "../../credentials";
import type { VenafiTlsProtectDatacenterNodeParameters } from "../nodes/VenafiTlsProtectDatacenter";
import { Node, type NodeProps } from "../../nodes";

export interface VenafiTlsProtectDatacenterProps extends NodeProps, VenafiTlsProtectDatacenterNodeParameters {

    readonly venafiTlsProtectDatacenterApiCredentials: Credentials<VenafiTlsProtectDatacenterApiCredentials>;

}

export class VenafiTlsProtectDatacenter<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.venafiTlsProtectDatacenter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: VenafiTlsProtectDatacenterProps) {

        super(id, props);

    }

    override getParameters() : Omit<VenafiTlsProtectDatacenterNodeParameters, "venafiTlsProtectDatacenterApiCredentials"> {

        const { venafiTlsProtectDatacenterApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.venafiTlsProtectDatacenterApiCredentials];

    }


}

