// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MemoryManagerNodeParameters } from "../nodes/MemoryManager";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryManagerProps extends NodeProps {

    readonly parameters: MemoryManagerNodeParameters;

}

/**
 * Manage chat messages memory and use it in the workflow
 */
export class MemoryManager<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.memoryManager" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: MemoryManagerProps) {

        super(id, props);

    }


}
