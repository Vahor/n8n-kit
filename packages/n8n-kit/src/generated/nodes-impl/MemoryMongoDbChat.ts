// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MongoDbCredentials } from "../credentials/MongoDb.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { MemoryMongoDbChatNodeParameters } from "../nodes/MemoryMongoDbChat";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MemoryMongoDbChatProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MemoryMongoDbChatNodeParameters;
    readonly mongoDbCredentials: Credentials<MongoDbCredentials>;
}

/**
 * Stores the chat history in MongoDB collection.
 */
export class MemoryMongoDbChat<L extends string, C extends IContext = never, P extends MemoryMongoDbChatProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.memoryMongoDbChat" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mongoDbCredentials];
    }

    public toAiMemory(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_memory" });
        return this;
    }

}
