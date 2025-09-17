// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TwitterOAuth1ApiCredentials } from "../credentials/TwitterOAuth1Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TwitterV1NodeParameters } from "../nodes/TwitterV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TwitterV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TwitterV1NodeParameters;
    readonly twitterOAuth1ApiCredentials: Credentials<TwitterOAuth1ApiCredentials>;
}

/**
 * Consume Twitter API
 */
export class TwitterV1<L extends string, C extends IContext = never, P extends TwitterV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.twitter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.twitterOAuth1ApiCredentials];
    }

}
