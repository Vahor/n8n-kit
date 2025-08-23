// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NasaApiCredentials } from "../credentials/NasaApi.ts";
import type { Credentials } from "../../credentials";
import type { NasaNodeParameters } from "../nodes/Nasa";
import { Node, type NodeProps } from "../../nodes";

export interface NasaProps extends NodeProps, NasaNodeParameters {

    readonly nasaApiCredentials: Credentials<NasaApiCredentials>;

}

export class Nasa<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.nasa" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: NasaProps) {

        super(id, props);

    }

    override getParameters() : Omit<NasaNodeParameters, "nasaApiCredentials"> {

        const { nasaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.nasaApiCredentials];

    }


}

