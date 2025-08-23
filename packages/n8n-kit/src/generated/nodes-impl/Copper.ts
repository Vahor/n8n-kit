// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CopperApiCredentials } from "../credentials/CopperApi.ts";
import type { Credentials } from "../../credentials";
import type { CopperNodeParameters } from "../nodes/Copper";
import { Node, type NodeProps } from "../../nodes";

export interface CopperProps extends NodeProps {

    readonly parameters: CopperNodeParameters;
    readonly copperApiCredentials: Credentials<CopperApiCredentials>;

}

/**
 * Consume the Copper API
 */
export class Copper<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.copper" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: CopperProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.copperApiCredentials];

    }


}
