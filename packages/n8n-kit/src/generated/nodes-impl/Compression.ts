// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { CompressionNodeParameters } from "../nodes/Compression";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CompressionProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CompressionNodeParameters;
}

/**
 * Compress and decompress files
 */
export class Compression<L extends string, C extends IContext = never, P extends CompressionProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.compression" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
