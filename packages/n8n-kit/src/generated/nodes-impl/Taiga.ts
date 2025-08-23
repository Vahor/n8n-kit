// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TaigaApiCredentials } from "../credentials/TaigaApi.ts";
import type { Credentials } from "../../credentials";
import type { TaigaNodeParameters } from "../nodes/Taiga";
import { Node, type NodeProps } from "../../nodes";

export interface TaigaProps extends NodeProps, TaigaNodeParameters {

    readonly taigaApiCredentials: Credentials<TaigaApiCredentials>;

}

export class Taiga<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.taiga" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: TaigaProps) {

        super(id, props);

    }

    override getParameters() : Omit<TaigaNodeParameters, "taigaApiCredentials"> {

        const { taigaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.taigaApiCredentials];

    }


}
