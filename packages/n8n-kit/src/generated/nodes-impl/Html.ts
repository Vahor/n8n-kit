// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HtmlNodeParameters } from "../nodes/Html";
import { Node, type NodeProps } from "../../nodes/node";

export interface HtmlProps extends NodeProps {
    readonly parameters: HtmlNodeParameters;
}

/**
 * Work with HTML
 */
export class Html<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.html" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props?: HtmlProps) {
        super(id, props);
    }

}
