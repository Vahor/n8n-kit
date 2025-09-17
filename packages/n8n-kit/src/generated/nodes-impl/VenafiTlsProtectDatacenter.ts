// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VenafiTlsProtectDatacenterApiCredentials } from "../credentials/VenafiTlsProtectDatacenterApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { VenafiTlsProtectDatacenterNodeParameters } from "../nodes/VenafiTlsProtectDatacenter";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface VenafiTlsProtectDatacenterProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: VenafiTlsProtectDatacenterNodeParameters;
    readonly venafiTlsProtectDatacenterApiCredentials: Credentials<VenafiTlsProtectDatacenterApiCredentials>;
}

/**
 * Consume Venafi TLS Protect Datacenter
 */
export class VenafiTlsProtectDatacenter<L extends string, C extends IContext = never, P extends VenafiTlsProtectDatacenterProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.venafiTlsProtectDatacenter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.venafiTlsProtectDatacenterApiCredentials];
    }

}
