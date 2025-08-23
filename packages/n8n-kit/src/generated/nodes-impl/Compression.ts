// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CompressionNodeParameters } from "../nodes/Compression";
import { Node, type NodeProps } from "../../nodes";

export interface CompressionProps extends NodeProps {
    readonly parameters: CompressionNodeParameters;
}

/**
 * Compress and decompress files
 */
export class Compression<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.compression" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: CompressionProps) {
        super(id, props);
    }

}
