// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TwitterOAuth2ApiCredentials } from "../credentials/TwitterOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TwitterV2NodeParameters } from "../nodes/TwitterV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface TwitterV2Props extends NodeProps {
    readonly parameters: TwitterV2NodeParameters;
    readonly twitterOAuth2ApiCredentials: Credentials<TwitterOAuth2ApiCredentials>;
}

/**
 * Post, like, and search tweets, send messages, search users, and add users to lists
 */
export class TwitterV2<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.twitter" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: TwitterV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.twitterOAuth2ApiCredentials];
    }

}
