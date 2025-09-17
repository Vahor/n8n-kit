// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ExtractFromFileNodeParameters } from "../nodes/ExtractFromFile";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ExtractFromFileProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ExtractFromFileNodeParameters;
}

/**
 * Convert binary data to JSON
 */
export class ExtractFromFile<L extends string, C extends IContext = never, P extends ExtractFromFileProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.extractFromFile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
