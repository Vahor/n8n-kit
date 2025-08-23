// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OrbitApiCredentials } from "../credentials/OrbitApi.ts";
import type { Credentials } from "../../credentials";
import type { OrbitNodeParameters } from "../nodes/Orbit";
import { Node, type NodeProps } from "../../nodes";

export interface OrbitProps extends NodeProps {
    readonly parameters: OrbitNodeParameters;
    readonly orbitApiCredentials: Credentials<OrbitApiCredentials>;
}

/**
 * Consume Orbit API
 */
export class Orbit<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.orbit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: OrbitProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.orbitApiCredentials];
    }

}
