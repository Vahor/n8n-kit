// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZammadBasicAuthApiCredentials } from "../credentials/ZammadBasicAuthApi.ts";
import type { ZammadTokenAuthApiCredentials } from "../credentials/ZammadTokenAuthApi.ts";
import type { Credentials } from "../../credentials";
import type { ZammadNodeParameters } from "../nodes/Zammad";
import { Node, type NodeProps } from "../../nodes";

export interface ZammadProps extends NodeProps, ZammadNodeParameters {

    readonly zammadBasicAuthApiCredentials?: Credentials<ZammadBasicAuthApiCredentials>;
    readonly zammadTokenAuthApiCredentials?: Credentials<ZammadTokenAuthApiCredentials>;

}

export class Zammad<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.zammad" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: ZammadProps) {

        super(id, props);

    }

    override getParameters() {

        const { zammadBasicAuthApiCredentials:_0, zammadTokenAuthApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.zammadBasicAuthApiCredentials, this.props.zammadTokenAuthApiCredentials];

    }


}

