// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ReadBinaryFilesNodeParameters } from "../nodes/ReadBinaryFiles";
import { Node, type NodeProps } from "../../nodes/node";

export interface ReadBinaryFilesProps extends NodeProps {
    readonly parameters: ReadBinaryFilesNodeParameters;
}

/**
 * Reads binary files from disk
 */
export class ReadBinaryFiles<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.readBinaryFiles" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ReadBinaryFilesProps) {
        super(id, props);
    }

}
