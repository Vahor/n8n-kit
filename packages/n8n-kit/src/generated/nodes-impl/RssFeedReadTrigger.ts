// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { RssFeedReadTriggerNodeParameters } from "../nodes/RssFeedReadTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RssFeedReadTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RssFeedReadTriggerNodeParameters;
}

/**
 * Starts a workflow when an RSS feed is updated
 */
export class RssFeedReadTrigger<L extends string, C extends IContext = never, P extends RssFeedReadTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.rssFeedReadTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
