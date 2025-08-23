// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TwitterOAuth2ApiCredentials } from "../credentials/TwitterOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { TwitterV2NodeParameters } from "../nodes/TwitterV2";
import { Node, type NodeProps } from "../../nodes";

export interface TwitterV2Props extends NodeProps, TwitterV2NodeParameters {

    readonly twitterOAuth2ApiCredentials: Credentials<TwitterOAuth2ApiCredentials>;

}

export class TwitterV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props?: TwitterV2Props) {

        super(id, props);

    }

    override getParameters() {

        const { twitterOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.twitterOAuth2ApiCredentials];

    }


}

