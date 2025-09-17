// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { RssFeedReadNodeParameters } from "../nodes/RssFeedRead";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RssFeedReadProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RssFeedReadNodeParameters;
}

/**
 * Reads data from an RSS Feed
 */
export class RssFeedRead<L extends string, C extends IContext = never, P extends RssFeedReadProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.rssFeedRead" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
