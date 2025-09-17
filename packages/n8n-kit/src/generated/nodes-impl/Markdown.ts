// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { MarkdownNodeParameters } from "../nodes/Markdown";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MarkdownProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MarkdownNodeParameters;
}

/**
 * Convert data between Markdown and HTML
 */
export class Markdown<L extends string, C extends IContext = never, P extends MarkdownProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.markdown" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
