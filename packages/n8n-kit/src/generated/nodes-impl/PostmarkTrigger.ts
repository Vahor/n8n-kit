// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostmarkApiCredentials } from "../credentials/PostmarkApi.ts";
import type { Credentials } from "../../credentials";
import type { PostmarkTriggerNodeParameters } from "../nodes/PostmarkTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface PostmarkTriggerProps extends NodeProps, PostmarkTriggerNodeParameters {

    readonly postmarkApiCredentials: Credentials<PostmarkApiCredentials>;

}

export class PostmarkTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.postmarkTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: PostmarkTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<PostmarkTriggerNodeParameters, "postmarkApiCredentials"> {

        const { postmarkApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.postmarkApiCredentials];

    }


}
