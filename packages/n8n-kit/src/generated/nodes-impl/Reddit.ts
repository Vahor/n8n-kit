// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RedditOAuth2ApiCredentials } from "../credentials/RedditOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { RedditNodeParameters } from "../nodes/Reddit";
import { Node, type NodeProps } from "../../nodes";

export interface RedditProps extends NodeProps {

    readonly parameters: RedditNodeParameters;
    readonly redditOAuth2ApiCredentials?: Credentials<RedditOAuth2ApiCredentials>;

}

/**
 * Consume the Reddit API
 */
export class Reddit<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.reddit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: RedditProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.redditOAuth2ApiCredentials];

    }


}
