// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SpontitApiCredentials } from "../credentials/SpontitApi.ts";
import type { Credentials } from "../../credentials";
import type { SpontitNodeParameters } from "../nodes/Spontit";
import { Node, type NodeProps } from "../../nodes";

export interface SpontitProps extends NodeProps, SpontitNodeParameters {

    readonly spontitApiCredentials: Credentials<SpontitApiCredentials>;

}

export class Spontit<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.spontit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: SpontitProps) {

        super(id, props);

    }

    override getParameters() : Omit<SpontitNodeParameters, "spontitApiCredentials"> {

        const { spontitApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.spontitApiCredentials];

    }


}
