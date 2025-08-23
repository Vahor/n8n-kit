// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TwitterOAuth1ApiCredentials } from "../credentials/TwitterOAuth1Api.ts";
import type { Credentials } from "../../credentials";
import type { TwitterV1NodeParameters } from "../nodes/TwitterV1";
import { Node, type NodeProps } from "../../nodes";

export interface TwitterV1Props extends NodeProps, TwitterV1NodeParameters {

    readonly twitterOAuth1ApiCredentials: Credentials<TwitterOAuth1ApiCredentials>;

}

export class TwitterV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: TwitterV1Props) {

        super(id, props);

    }

    override getParameters() : Omit<TwitterV1NodeParameters, "twitterOAuth1ApiCredentials"> {

        const { twitterOAuth1ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.twitterOAuth1ApiCredentials];

    }


}
