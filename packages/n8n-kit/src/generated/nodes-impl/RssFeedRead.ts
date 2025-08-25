// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { RssFeedReadNodeParameters } from "../nodes/RssFeedRead";
import { Node, type NodeProps } from "../../nodes/node";

export interface RssFeedReadProps extends NodeProps {
    readonly parameters: RssFeedReadNodeParameters;
}

/**
 * Reads data from an RSS Feed
 */
export class RssFeedRead<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.rssFeedRead" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props?: RssFeedReadProps) {
        super(id, props);
    }

}
