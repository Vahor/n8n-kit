// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TaigaApiCredentials } from "../credentials/TaigaApi.ts";
import type { Credentials } from "../../credentials";
import type { TaigaTriggerNodeParameters } from "../nodes/TaigaTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface TaigaTriggerProps extends NodeProps, TaigaTriggerNodeParameters {

    readonly taigaApiCredentials: Credentials<TaigaApiCredentials>;

}

export class TaigaTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.taigaTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: TaigaTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { taigaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.taigaApiCredentials];

    }


}

