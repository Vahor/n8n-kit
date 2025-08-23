// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostmarkApiCredentials } from "../credentials/PostmarkApi.ts";
import type { Credentials } from "../../credentials";
import type { PostmarkTriggerNodeParameters } from "../nodes/PostmarkTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface PostmarkTriggerProps extends NodeProps {

    readonly parameters: PostmarkTriggerNodeParameters;
    readonly postmarkApiCredentials: Credentials<PostmarkApiCredentials>;

}

/**
 * Starts the workflow when Postmark events occur
 */
export class PostmarkTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.postmarkTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PostmarkTriggerProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.postmarkApiCredentials];

    }


}
