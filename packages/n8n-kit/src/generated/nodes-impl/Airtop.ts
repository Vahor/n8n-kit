// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AirtopApiCredentials } from "../credentials/AirtopApi.ts";
import type { Credentials } from "../../credentials";
import type { AirtopNodeParameters } from "../nodes/Airtop";
import { Node, type NodeProps } from "../../nodes";

export interface AirtopProps extends NodeProps, AirtopNodeParameters {

    readonly airtopApiCredentials: Credentials<AirtopApiCredentials>;

}

export class Airtop<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.airtop" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: AirtopProps) {

        super(id, props);

    }

    override getParameters() : Omit<AirtopNodeParameters, "airtopApiCredentials"> {

        const { airtopApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.airtopApiCredentials];

    }


}

