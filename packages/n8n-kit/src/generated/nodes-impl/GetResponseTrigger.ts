// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GetResponseApiCredentials } from "../credentials/GetResponseApi.ts";
import type { GetResponseOAuth2ApiCredentials } from "../credentials/GetResponseOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GetResponseTriggerNodeParameters } from "../nodes/GetResponseTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface GetResponseTriggerProps extends NodeProps, GetResponseTriggerNodeParameters {

    readonly getResponseApiCredentials?: Credentials<GetResponseApiCredentials>;
    readonly getResponseOAuth2ApiCredentials?: Credentials<GetResponseOAuth2ApiCredentials>;

}

export class GetResponseTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.getResponseTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: GetResponseTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<GetResponseTriggerNodeParameters, "getResponseApiCredentials | getResponseOAuth2ApiCredentials"> {

        const { getResponseApiCredentials:_0, getResponseOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.getResponseApiCredentials, this.props.getResponseOAuth2ApiCredentials];

    }


}
