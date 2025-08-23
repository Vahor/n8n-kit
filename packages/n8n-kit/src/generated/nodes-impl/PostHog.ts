// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostHogApiCredentials } from "../credentials/PostHogApi.ts";
import type { Credentials } from "../../credentials";
import type { PostHogNodeParameters } from "../nodes/PostHog";
import { Node, type NodeProps } from "../../nodes";

export interface PostHogProps extends NodeProps, PostHogNodeParameters {

    readonly postHogApiCredentials: Credentials<PostHogApiCredentials>;

}

export class PostHog<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.postHog" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: PostHogProps) {

        super(id, props);

    }

    override getParameters() {

        const { postHogApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.postHogApiCredentials];

    }


}

