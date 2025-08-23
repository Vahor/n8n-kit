// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VenafiTlsProtectDatacenterApiCredentials } from "../credentials/VenafiTlsProtectDatacenterApi.ts";
import type { Credentials } from "../../credentials";
import type { VenafiTlsProtectDatacenterTriggerNodeParameters } from "../nodes/VenafiTlsProtectDatacenterTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface VenafiTlsProtectDatacenterTriggerProps extends NodeProps, VenafiTlsProtectDatacenterTriggerNodeParameters {

    readonly venafiTlsProtectDatacenterApiCredentials: Credentials<VenafiTlsProtectDatacenterApiCredentials>;

}

export class VenafiTlsProtectDatacenterTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.venafiTlsProtectDatacenterTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: VenafiTlsProtectDatacenterTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { venafiTlsProtectDatacenterApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.venafiTlsProtectDatacenterApiCredentials];

    }


}

