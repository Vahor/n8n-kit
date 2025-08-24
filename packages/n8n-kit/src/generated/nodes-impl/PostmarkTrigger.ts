// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostmarkApiCredentials } from "../credentials/PostmarkApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PostmarkTriggerNodeParameters } from "../nodes/PostmarkTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface PostmarkTriggerProps extends NodeProps {
    readonly parameters: PostmarkTriggerNodeParameters;
    readonly postmarkApiCredentials: Credentials<PostmarkApiCredentials>;
}

/**
 * Starts the workflow when Postmark events occur
 */
export class PostmarkTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.postmarkTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PostmarkTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.postmarkApiCredentials];
    }

}
