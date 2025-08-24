// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { HackerNewsNodeParameters } from "../nodes/HackerNews";
import { Node, type NodeProps } from "../../nodes/node";

export interface HackerNewsProps extends NodeProps {
    readonly parameters: HackerNewsNodeParameters;
}

/**
 * Consume Hacker News API
 */
export class HackerNews<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.hackerNews" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: HackerNewsProps) {
        super(id, props);
    }

}
