// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VenafiTlsProtectDatacenterApiCredentials } from "../credentials/VenafiTlsProtectDatacenterApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { VenafiTlsProtectDatacenterTriggerNodeParameters } from "../nodes/VenafiTlsProtectDatacenterTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface VenafiTlsProtectDatacenterTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: VenafiTlsProtectDatacenterTriggerNodeParameters;
    readonly venafiTlsProtectDatacenterApiCredentials: Credentials<VenafiTlsProtectDatacenterApiCredentials>;
}

/**
 * Starts the workflow when Venafi events occur
 */
export class VenafiTlsProtectDatacenterTrigger<L extends string, C extends IContext = never, P extends VenafiTlsProtectDatacenterTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.venafiTlsProtectDatacenterTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.venafiTlsProtectDatacenterApiCredentials];
    }

}
