// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostHogApiCredentials } from "../credentials/PostHogApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PostHogNodeParameters } from "../nodes/PostHog";
import { Node, type NodeProps } from "../../nodes/node";

export interface PostHogProps extends NodeProps {
    readonly parameters: PostHogNodeParameters;
    readonly postHogApiCredentials: Credentials<PostHogApiCredentials>;
}

/**
 * Consume PostHog API
 */
export class PostHog<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.postHog" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PostHogProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.postHogApiCredentials];
    }

}
