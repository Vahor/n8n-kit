// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { CompressionNodeParameters } from "../nodes/Compression";
import { Node, type NodeProps } from "../../nodes/node";

export interface CompressionProps extends NodeProps {
    readonly parameters: CompressionNodeParameters;
}

/**
 * Compress and decompress files
 */
export class Compression<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.compression" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: CompressionProps) {
        super(id, props);
    }

}
