// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DiscourseApiCredentials } from "../credentials/DiscourseApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { DiscourseNodeParameters } from "../nodes/Discourse";
import { Node, type NodeProps } from "../../nodes/node";

export interface DiscourseProps extends NodeProps {
    readonly parameters: DiscourseNodeParameters;
    readonly discourseApiCredentials: Credentials<DiscourseApiCredentials>;
}

/**
 * Consume Discourse API
 */
export class Discourse<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.discourse" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: DiscourseProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.discourseApiCredentials];
    }

}
