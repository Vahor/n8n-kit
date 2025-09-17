// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostmarkApiCredentials } from "../credentials/PostmarkApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PostmarkTriggerNodeParameters } from "../nodes/PostmarkTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PostmarkTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PostmarkTriggerNodeParameters;
    readonly postmarkApiCredentials: Credentials<PostmarkApiCredentials>;
}

/**
 * Starts the workflow when Postmark events occur
 */
export class PostmarkTrigger<L extends string, C extends IContext = never, P extends PostmarkTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.postmarkTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.postmarkApiCredentials];
    }

}
