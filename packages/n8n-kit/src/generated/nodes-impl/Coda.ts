// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CodaApiCredentials } from "../credentials/CodaApi.ts";
import type { Credentials } from "../../credentials";
import type { CodaNodeParameters } from "../nodes/Coda";
import { Node, type NodeProps } from "../../nodes";

export interface CodaProps extends NodeProps, CodaNodeParameters {

    readonly codaApiCredentials: Credentials<CodaApiCredentials>;

}

export class Coda<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.coda" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: CodaProps) {

        super(id, props);

    }

    override getParameters() {

        const { codaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.codaApiCredentials];

    }


}

