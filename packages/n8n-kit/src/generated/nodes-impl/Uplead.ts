// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { UpleadApiCredentials } from "../credentials/UpleadApi.ts";
import type { Credentials } from "../../credentials";
import type { UpleadNodeParameters } from "../nodes/Uplead";
import { Node, type NodeProps } from "../../nodes";

export interface UpleadProps extends NodeProps, UpleadNodeParameters {

    readonly upleadApiCredentials: Credentials<UpleadApiCredentials>;

}

export class Uplead<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.uplead" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: UpleadProps) {

        super(id, props);

    }

    override getParameters() {

        const { upleadApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.upleadApiCredentials];

    }


}

