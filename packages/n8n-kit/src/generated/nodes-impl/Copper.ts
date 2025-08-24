// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CopperApiCredentials } from "../credentials/CopperApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CopperNodeParameters } from "../nodes/Copper";
import { Node, type NodeProps } from "../../nodes/node";

export interface CopperProps extends NodeProps {
    readonly parameters: CopperNodeParameters;
    readonly copperApiCredentials: Credentials<CopperApiCredentials>;
}

/**
 * Consume the Copper API
 */
export class Copper<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.copper" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: CopperProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.copperApiCredentials];
    }

}
