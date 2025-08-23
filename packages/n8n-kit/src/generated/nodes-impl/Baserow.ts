// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BaserowApiCredentials } from "../credentials/BaserowApi.ts";
import type { Credentials } from "../../credentials";
import type { BaserowNodeParameters } from "../nodes/Baserow";
import { Node, type NodeProps } from "../../nodes";

export interface BaserowProps extends NodeProps, BaserowNodeParameters {

    readonly baserowApiCredentials: Credentials<BaserowApiCredentials>;

}

export class Baserow<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.baserow" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: BaserowProps) {

        super(id, props);

    }

    override getParameters() {

        const { baserowApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.baserowApiCredentials];

    }


}

