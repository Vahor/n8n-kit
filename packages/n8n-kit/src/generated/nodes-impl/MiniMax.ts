// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MinimaxApiCredentials } from "../credentials/MinimaxApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { MiniMaxNodeParameters } from "../nodes/MiniMax";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MiniMaxProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MiniMaxNodeParameters;
    readonly minimaxApiCredentials: Credentials<MinimaxApiCredentials>;
}

/**
 * Interact with MiniMax AI models
 */
export class MiniMax<L extends string, C extends IContext = never, P extends MiniMaxProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.minimax" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props.minimaxApiCredentials];
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

}
