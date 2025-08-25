// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AnthropicApiCredentials } from "../credentials/AnthropicApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { AnthropicNodeParameters } from "../nodes/Anthropic";
import { Node, type NodeProps } from "../../nodes/node";

export interface AnthropicProps extends NodeProps {
    readonly parameters: AnthropicNodeParameters;
    readonly anthropicApiCredentials: Credentials<AnthropicApiCredentials>;
}

/**
 * Interact with Anthropic AI models
 */
export class Anthropic<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.anthropic" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AnthropicProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props!.anthropicApiCredentials];
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

}
