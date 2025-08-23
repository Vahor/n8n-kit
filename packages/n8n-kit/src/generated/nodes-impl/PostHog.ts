// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostHogApiCredentials } from "../credentials/PostHogApi.ts";
import type { Credentials } from "../../credentials";
import type { PostHogNodeParameters } from "../nodes/PostHog";
import { Node, type NodeProps } from "../../nodes";

export interface PostHogProps extends NodeProps {

    readonly parameters: PostHogNodeParameters;
    readonly postHogApiCredentials: Credentials<PostHogApiCredentials>;

}

/**
 * Consume PostHog API
 */
export class PostHog<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.postHog" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PostHogProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.postHogApiCredentials];

    }


}
