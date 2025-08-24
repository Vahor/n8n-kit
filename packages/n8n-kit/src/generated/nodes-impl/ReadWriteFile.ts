// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ReadWriteFileNodeParameters } from "../nodes/ReadWriteFile";
import { Node, type NodeProps } from "../../nodes/node";

export interface ReadWriteFileProps extends NodeProps {
    readonly parameters: ReadWriteFileNodeParameters;
}

/**
 * Read or write files from the computer that runs n8n
 */
export class ReadWriteFile<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.readWriteFile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ReadWriteFileProps) {
        super(id, props);
    }

}
