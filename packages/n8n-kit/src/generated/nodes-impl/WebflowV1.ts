// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WebflowApiCredentials } from "../credentials/WebflowApi.ts";
import type { WebflowOAuth2ApiCredentials } from "../credentials/WebflowOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { WebflowV1NodeParameters } from "../nodes/WebflowV1";
import { Node, type NodeProps } from "../../nodes";

export interface WebflowV1Props extends NodeProps, WebflowV1NodeParameters {

    readonly webflowApiCredentials?: Credentials<WebflowApiCredentials>;
    readonly webflowOAuth2ApiCredentials?: Credentials<WebflowOAuth2ApiCredentials>;

}

export class WebflowV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: WebflowV1Props) {

        super(id, props);

    }

    override getParameters() : Omit<WebflowV1NodeParameters, "webflowApiCredentials | webflowOAuth2ApiCredentials"> {

        const { webflowApiCredentials:_0, webflowOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.webflowApiCredentials, this.props.webflowOAuth2ApiCredentials];

    }


}
