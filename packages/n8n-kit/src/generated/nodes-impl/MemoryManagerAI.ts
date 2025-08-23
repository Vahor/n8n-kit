// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MemoryManagerAINodeParameters } from "../nodes/MemoryManagerAI";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryManagerAIProps extends NodeProps, MemoryManagerAINodeParameters {


}

export class MemoryManagerAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.memoryManager" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: MemoryManagerAIProps) {

        super(id, props);

    }

    override getParameters() : MemoryManagerAINodeParameters {

        return this.props ?? {};

    }


}

