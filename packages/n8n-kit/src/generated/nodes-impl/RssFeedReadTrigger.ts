// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RssFeedReadTriggerNodeParameters } from "../nodes/RssFeedReadTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface RssFeedReadTriggerProps extends NodeProps {
    readonly parameters: RssFeedReadTriggerNodeParameters;
}

/**
 * Starts a workflow when an RSS feed is updated
 */
export class RssFeedReadTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.rssFeedReadTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: RssFeedReadTriggerProps) {
        super(id, props);
    }

}
