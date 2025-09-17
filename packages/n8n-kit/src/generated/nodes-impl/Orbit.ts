// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OrbitApiCredentials } from "../credentials/OrbitApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { OrbitNodeParameters } from "../nodes/Orbit";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface OrbitProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: OrbitNodeParameters;
    readonly orbitApiCredentials: Credentials<OrbitApiCredentials>;
}

/**
 * Consume Orbit API
 */
export class Orbit<L extends string, C extends IContext = never, P extends OrbitProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.orbit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.orbitApiCredentials];
    }

}
