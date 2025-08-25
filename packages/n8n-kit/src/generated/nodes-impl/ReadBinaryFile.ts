// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ReadBinaryFileNodeParameters } from "../nodes/ReadBinaryFile";
import { Node, type NodeProps } from "../../nodes/node";

export interface ReadBinaryFileProps extends NodeProps {
    readonly parameters: ReadBinaryFileNodeParameters;
}

/**
 * Reads a binary file from disk
 */
export class ReadBinaryFile<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.readBinaryFile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ReadBinaryFileProps) {
        super(id, props);
    }

}
