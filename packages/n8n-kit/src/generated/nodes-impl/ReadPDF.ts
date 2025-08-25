// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ReadPDFNodeParameters } from "../nodes/ReadPDF";
import { Node, type NodeProps } from "../../nodes/node";

export interface ReadPDFProps extends NodeProps {
    readonly parameters: ReadPDFNodeParameters;
}

/**
 * Reads a PDF and extracts its content
 */
export class ReadPDF<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.readPDF" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ReadPDFProps) {
        super(id, props);
    }

}
