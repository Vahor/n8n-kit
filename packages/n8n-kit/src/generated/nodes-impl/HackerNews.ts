// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { HackerNewsNodeParameters } from "../nodes/HackerNews";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface HackerNewsProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: HackerNewsNodeParameters;
}

/**
 * Consume Hacker News API
 */
export class HackerNews<L extends string, C extends IContext = never, P extends HackerNewsProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.hackerNews" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
