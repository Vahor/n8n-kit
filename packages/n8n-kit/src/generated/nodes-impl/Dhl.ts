// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DhlApiCredentials } from "../credentials/DhlApi.ts";
import type { Credentials } from "../../credentials";
import type { DhlNodeParameters } from "../nodes/Dhl";
import { Node, type NodeProps } from "../../nodes";

export interface DhlProps extends NodeProps, DhlNodeParameters {

    readonly dhlApiCredentials: Credentials<DhlApiCredentials>;

}

export class Dhl<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.dhl" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: DhlProps) {

        super(id, props);

    }

    override getParameters() : Omit<DhlNodeParameters, "dhlApiCredentials"> {

        const { dhlApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.dhlApiCredentials];

    }


}

