// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ReadPDFNodeParameters } from "../nodes/ReadPDF";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ReadPDFProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ReadPDFNodeParameters;
}

/**
 * Reads a PDF and extracts its content
 */
export class ReadPDF<L extends string, C extends IContext = never, P extends ReadPDFProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.readPDF" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
