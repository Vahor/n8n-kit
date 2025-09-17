// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TwitterOAuth2ApiCredentials } from "../credentials/TwitterOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TwitterV2NodeParameters } from "../nodes/TwitterV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TwitterV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TwitterV2NodeParameters;
    readonly twitterOAuth2ApiCredentials: Credentials<TwitterOAuth2ApiCredentials>;
}

/**
 * Post, like, and search tweets, send messages, search users, and add users to lists
 */
export class TwitterV2<L extends string, C extends IContext = never, P extends TwitterV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.twitter" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.twitterOAuth2ApiCredentials];
    }

}
