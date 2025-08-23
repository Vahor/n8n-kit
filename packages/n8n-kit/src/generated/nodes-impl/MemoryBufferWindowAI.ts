// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MemoryBufferWindowAINodeParameters } from "../nodes/MemoryBufferWindowAI";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryBufferWindowAIProps extends NodeProps, MemoryBufferWindowAINodeParameters {


}

export class MemoryBufferWindowAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.memoryBufferWindow" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props?: MemoryBufferWindowAIProps) {

        super(id, props);

    }

    override getParameters() : MemoryBufferWindowAINodeParameters {

        return this.props ?? {};

    }


}
