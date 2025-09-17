// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { HtmlNodeParameters } from "../nodes/Html";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface HtmlProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: HtmlNodeParameters;
}

/**
 * Work with HTML
 */
export class Html<L extends string, C extends IContext = never, P extends HtmlProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.html" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
