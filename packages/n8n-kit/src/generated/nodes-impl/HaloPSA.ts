// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HaloPSAApiCredentials } from "../credentials/HaloPSAApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { HaloPSANodeParameters } from "../nodes/HaloPSA";
import { Node, type NodeProps } from "../../nodes/node";

export interface HaloPSAProps extends NodeProps {
    readonly parameters: HaloPSANodeParameters;
    readonly haloPsaApiCredentials: Credentials<HaloPSAApiCredentials>;
}

/**
 * Consume HaloPSA API
 */
export class HaloPSA<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.haloPSA" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: HaloPSAProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.haloPsaApiCredentials];
    }

}
