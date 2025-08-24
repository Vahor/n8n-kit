// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { WriteBinaryFileNodeParameters } from "../nodes/WriteBinaryFile";
import { Node, type NodeProps } from "../../nodes/node";

export interface WriteBinaryFileProps extends NodeProps {
    readonly parameters: WriteBinaryFileNodeParameters;
}

/**
 * Writes a binary file to disk
 */
export class WriteBinaryFile<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.writeBinaryFile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: WriteBinaryFileProps) {
        super(id, props);
    }

}
