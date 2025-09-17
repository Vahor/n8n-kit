// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VenafiTlsProtectCloudApiCredentials } from "../credentials/VenafiTlsProtectCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { VenafiTlsProtectCloudTriggerNodeParameters } from "../nodes/VenafiTlsProtectCloudTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface VenafiTlsProtectCloudTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: VenafiTlsProtectCloudTriggerNodeParameters;
    readonly venafiTlsProtectCloudApiCredentials: Credentials<VenafiTlsProtectCloudApiCredentials>;
}

/**
 * Starts the workflow when Venafi events occur
 */
export class VenafiTlsProtectCloudTrigger<L extends string, C extends IContext = never, P extends VenafiTlsProtectCloudTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.venafiTlsProtectCloudTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.venafiTlsProtectCloudApiCredentials];
    }

}
