// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CortexApiCredentials } from "../credentials/CortexApi.ts";
import type { Credentials } from "../../credentials";
import type { CortexNodeParameters } from "../nodes/Cortex";
import { Node, type NodeProps } from "../../nodes";

export interface CortexProps extends NodeProps, CortexNodeParameters {

    readonly cortexApiCredentials: Credentials<CortexApiCredentials>;

}

export class Cortex<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.cortex" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: CortexProps) {

        super(id, props);

    }

    override getParameters() {

        const { cortexApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.cortexApiCredentials];

    }


}

