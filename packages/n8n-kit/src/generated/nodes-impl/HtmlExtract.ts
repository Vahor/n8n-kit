// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { HtmlExtractNodeParameters } from "../nodes/HtmlExtract";
import { Node, type NodeProps } from "../../nodes/node";

export interface HtmlExtractProps extends NodeProps {
    readonly parameters: HtmlExtractNodeParameters;
}

/**
 * Extracts data from HTML
 */
export class HtmlExtract<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.htmlExtract" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: HtmlExtractProps) {
        super(id, props);
    }

}
