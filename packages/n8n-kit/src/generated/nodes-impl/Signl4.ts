// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { Signl4ApiCredentials } from "../credentials/Signl4Api.ts";
import type { Credentials } from "../../credentials";
import type { Signl4NodeParameters } from "../nodes/Signl4";
import { Node, type NodeProps } from "../../nodes";

export interface Signl4Props extends NodeProps, Signl4NodeParameters {

    readonly signl4ApiCredentials: Credentials<Signl4ApiCredentials>;

}

export class Signl4<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.signl4" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: Signl4Props) {

        super(id, props);

    }

    override getParameters() : Omit<Signl4NodeParameters, "signl4ApiCredentials"> {

        const { signl4ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.signl4ApiCredentials];

    }


}
