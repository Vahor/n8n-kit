// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostHogApiCredentials } from "../credentials/PostHogApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PostHogNodeParameters } from "../nodes/PostHog";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PostHogProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PostHogNodeParameters;
    readonly postHogApiCredentials: Credentials<PostHogApiCredentials>;
}

/**
 * Consume PostHog API
 */
export class PostHog<L extends string, C extends IContext = never, P extends PostHogProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.postHog" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.postHogApiCredentials];
    }

}
