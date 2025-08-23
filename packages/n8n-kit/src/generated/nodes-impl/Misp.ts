// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MispApiCredentials } from "../credentials/MispApi.ts";
import type { Credentials } from "../../credentials";
import type { MispNodeParameters } from "../nodes/Misp";
import { Node, type NodeProps } from "../../nodes";

export interface MispProps extends NodeProps, MispNodeParameters {

    readonly mispApiCredentials: Credentials<MispApiCredentials>;

}

export class Misp<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.misp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: MispProps) {

        super(id, props);

    }

    override getParameters() : Omit<MispNodeParameters, "mispApiCredentials"> {

        const { mispApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mispApiCredentials];

    }


}
