// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PostgresCredentials } from "../credentials/Postgres.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { MemoryPostgresChatNodeParameters } from "../nodes/MemoryPostgresChat";
import { Node, type NodeProps } from "../../nodes/node";

export interface MemoryPostgresChatProps extends NodeProps {
    readonly parameters: MemoryPostgresChatNodeParameters;
    readonly postgresCredentials: Credentials<PostgresCredentials>;
}

/**
 * Stores the chat history in Postgres table.
 */
export class MemoryPostgresChat<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.memoryPostgresChat" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: MemoryPostgresChatProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.postgresCredentials];
    }

    public toAiMemory(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_memory" });
        return this;
    }

}
