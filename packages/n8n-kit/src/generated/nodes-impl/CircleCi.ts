// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CircleCiApiCredentials } from "../credentials/CircleCiApi.ts";
import type { Credentials } from "../../credentials";
import type { CircleCiNodeParameters } from "../nodes/CircleCi";
import { Node, type NodeProps } from "../../nodes";

export interface CircleCiProps extends NodeProps, CircleCiNodeParameters {

    readonly circleCiApiCredentials: Credentials<CircleCiApiCredentials>;

}

export class CircleCi<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.circleCi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: CircleCiProps) {

        super(id, props);

    }

    override getParameters() : Omit<CircleCiNodeParameters, "circleCiApiCredentials"> {

        const { circleCiApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.circleCiApiCredentials];

    }


}

