// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GetResponseApiCredentials } from "../credentials/GetResponseApi.ts";
import type { GetResponseOAuth2ApiCredentials } from "../credentials/GetResponseOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GetResponseNodeParameters } from "../nodes/GetResponse";
import { Node, type NodeProps } from "../../nodes";

export interface GetResponseProps extends NodeProps, GetResponseNodeParameters {

    readonly getResponseApiCredentials?: Credentials<GetResponseApiCredentials>;
    readonly getResponseOAuth2ApiCredentials?: Credentials<GetResponseOAuth2ApiCredentials>;

}

export class GetResponse<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.getResponse" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: GetResponseProps) {

        super(id, props);

    }

    override getParameters() {

        const { getResponseApiCredentials:_0, getResponseOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.getResponseApiCredentials, this.props.getResponseOAuth2ApiCredentials];

    }


}

