// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { HtmlExtractNodeParameters } from "../nodes/HtmlExtract";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface HtmlExtractProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: HtmlExtractNodeParameters;
}

/**
 * Extracts data from HTML
 */
export class HtmlExtract<L extends string, C extends IContext = never, P extends HtmlExtractProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.htmlExtract" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
