// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HackerNewsNodeParameters } from "../nodes/HackerNews";
import { Node, type NodeProps } from "../../nodes";

export interface HackerNewsProps extends NodeProps {
    readonly parameters: HackerNewsNodeParameters;
}

/**
 * Consume Hacker News API
 */
export class HackerNews<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.hackerNews" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: HackerNewsProps) {
        super(id, props);
    }

}
