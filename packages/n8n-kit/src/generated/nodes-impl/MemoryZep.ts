// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZepApiCredentials } from "../credentials/ZepApi.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { MemoryZepNodeParameters } from "../nodes/MemoryZep";
import { Node, type NodeProps } from "../../nodes";

export interface MemoryZepProps extends NodeProps {
    readonly parameters: MemoryZepNodeParameters;
    readonly zepApiCredentials: Credentials<ZepApiCredentials>;
}

/**
 * Use Zep Memory
 */
export class MemoryZep<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.memoryZep" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: MemoryZepProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.zepApiCredentials];
    }

    public aiMemory(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_memory" });
        return this;
    }

}
