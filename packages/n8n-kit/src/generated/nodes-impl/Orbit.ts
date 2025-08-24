// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OrbitApiCredentials } from "../credentials/OrbitApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { OrbitNodeParameters } from "../nodes/Orbit";
import { Node, type NodeProps } from "../../nodes/node";

export interface OrbitProps extends NodeProps {
    readonly parameters: OrbitNodeParameters;
    readonly orbitApiCredentials: Credentials<OrbitApiCredentials>;
}

/**
 * Consume Orbit API
 */
export class Orbit<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.orbit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: OrbitProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.orbitApiCredentials];
    }

}
