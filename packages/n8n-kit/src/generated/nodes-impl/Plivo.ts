// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PlivoApiCredentials } from "../credentials/PlivoApi.ts";
import type { Credentials } from "../../credentials";
import type { PlivoNodeParameters } from "../nodes/Plivo";
import { Node, type NodeProps } from "../../nodes";

export interface PlivoProps extends NodeProps, PlivoNodeParameters {

    readonly plivoApiCredentials: Credentials<PlivoApiCredentials>;

}

export class Plivo<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.plivo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: PlivoProps) {

        super(id, props);

    }

    override getParameters() : Omit<PlivoNodeParameters, "plivoApiCredentials"> {

        const { plivoApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.plivoApiCredentials];

    }


}

