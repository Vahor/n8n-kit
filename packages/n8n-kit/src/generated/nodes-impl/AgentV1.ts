// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MySqlCredentials } from "../credentials/MySql.ts";
import type { PostgresCredentials } from "../credentials/Postgres.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { AgentV1NodeParameters } from "../nodes/AgentV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AgentV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AgentV1NodeParameters;
    readonly mySqlCredentials?: Credentials<MySqlCredentials>;
    readonly postgresCredentials?: Credentials<PostgresCredentials>;
}

/**
 * Generates an action plan and executes it. Can use external tools.
 */
export class AgentV1<L extends string, C extends IContext = never, P extends AgentV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.agent" as const;
    protected typeVersion = 1.9 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props?.mySqlCredentials, this.props?.postgresCredentials];
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

}
