// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WebflowOAuth2ApiCredentials } from "../credentials/WebflowOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { WebflowV2NodeParameters } from "../nodes/WebflowV2";
import { Node, type NodeProps } from "../../nodes";

export interface WebflowV2Props extends NodeProps, WebflowV2NodeParameters {

    readonly webflowOAuth2ApiCredentials: Credentials<WebflowOAuth2ApiCredentials>;

}

export class WebflowV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.webflow" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props: WebflowV2Props) {

        super(id, props);

    }

    override getParameters() : Omit<WebflowV2NodeParameters, "webflowOAuth2ApiCredentials"> {

        const { webflowOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.webflowOAuth2ApiCredentials];

    }


}
