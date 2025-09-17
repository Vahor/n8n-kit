// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RedditOAuth2ApiCredentials } from "../credentials/RedditOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { RedditNodeParameters } from "../nodes/Reddit";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RedditProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RedditNodeParameters;
    readonly redditOAuth2ApiCredentials?: Credentials<RedditOAuth2ApiCredentials>;
}

/**
 * Consume the Reddit API
 */
export class Reddit<L extends string, C extends IContext = never, P extends RedditProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.reddit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.redditOAuth2ApiCredentials];
    }

}
