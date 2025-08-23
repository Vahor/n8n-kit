// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IChainable } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
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
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    public with(next: State): this {
        super.addNext(next.startState, { type: "main", direction: "input" });
        return this;
    }

    public withMemory(next: State): this {
        super.addNext(next.startState, { type: "ai_memory", direction: "input" });
        return this;
    }

    public to(next: IChainable): this {
        super.addNext(next.startState, { type: "main" });
        return this;
    }

}
