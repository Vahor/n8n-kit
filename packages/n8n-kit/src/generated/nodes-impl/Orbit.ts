// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OrbitApiCredentials } from "../credentials/OrbitApi.ts";
import type { Credentials } from "../../credentials";
import type { OrbitNodeParameters } from "../nodes/Orbit";
import { Node, type NodeProps } from "../../nodes";

export interface OrbitProps extends NodeProps, OrbitNodeParameters {

    readonly orbitApiCredentials: Credentials<OrbitApiCredentials>;

}

export class Orbit<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.orbit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: OrbitProps) {

        super(id, props);

    }

    override getParameters() : Omit<OrbitNodeParameters, "orbitApiCredentials"> {

        const { orbitApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.orbitApiCredentials];

    }


}

