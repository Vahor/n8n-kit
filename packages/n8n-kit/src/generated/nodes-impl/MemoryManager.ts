// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MemoryManagerNodeParameters } from "../nodes/MemoryManager";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryManagerProps extends NodeProps, MemoryManagerNodeParameters {


}

export class MemoryManager<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.memoryManager" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: MemoryManagerProps) {

        super(id, props);

    }

    override getParameters() : MemoryManagerNodeParameters {

        return this.props ?? {};

    }


}
