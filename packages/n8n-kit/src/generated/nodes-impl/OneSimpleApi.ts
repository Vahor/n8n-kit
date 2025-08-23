// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OneSimpleApiCredentials } from "../credentials/OneSimpleApi.ts";
import type { Credentials } from "../../credentials";
import type { OneSimpleApiNodeParameters } from "../nodes/OneSimpleApi";
import { Node, type NodeProps } from "../../nodes";

export interface OneSimpleApiProps extends NodeProps, OneSimpleApiNodeParameters {

    readonly oneSimpleApiCredentials: Credentials<OneSimpleApiCredentials>;

}

export class OneSimpleApi<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.oneSimpleApi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: OneSimpleApiProps) {

        super(id, props);

    }

    override getParameters() : Omit<OneSimpleApiNodeParameters, "oneSimpleApiCredentials"> {

        const { oneSimpleApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.oneSimpleApiCredentials];

    }


}

