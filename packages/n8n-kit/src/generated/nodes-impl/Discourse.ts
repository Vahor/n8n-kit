// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DiscourseApiCredentials } from "../credentials/DiscourseApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { DiscourseNodeParameters } from "../nodes/Discourse";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DiscourseProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DiscourseNodeParameters;
    readonly discourseApiCredentials: Credentials<DiscourseApiCredentials>;
}

/**
 * Consume Discourse API
 */
export class Discourse<L extends string, C extends IContext = never, P extends DiscourseProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.discourse" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.discourseApiCredentials];
    }

}
