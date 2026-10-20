// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DatabricksOAuth2ApiCredentials } from "../credentials/DatabricksOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { DatabricksAiAgentNodeParameters } from "../nodes/DatabricksAiAgent";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DatabricksAiAgentProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DatabricksAiAgentNodeParameters;
    readonly databricksOAuth2ApiCredentials?: Credentials<DatabricksOAuth2ApiCredentials>;
}

/**
 * An AI agent that exports its runs to MLflow Tracing in Databricks
 */
export class DatabricksAiAgent<L extends string, C extends IContext = never, P extends DatabricksAiAgentProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.databricksAiAgent" as const;
    protected typeVersion = 2.2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props?.databricksOAuth2ApiCredentials];
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

}
