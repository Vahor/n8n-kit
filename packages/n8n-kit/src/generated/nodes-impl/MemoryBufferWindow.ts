// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { MemoryBufferWindowNodeParameters } from "../nodes/MemoryBufferWindow";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryBufferWindowProps extends NodeProps {
    readonly parameters: MemoryBufferWindowNodeParameters;
}

/**
 * Stores in n8n memory, so no credentials required
 */
export class MemoryBufferWindow<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.memoryBufferWindow" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props?: MemoryBufferWindowProps) {
        super(id, props);
    }

    public toAiMemory(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_memory" });
        return this;
    }

}
