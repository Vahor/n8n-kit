// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenAiApiCredentials } from "../credentials/OpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { OpenAiAssistantNodeParameters } from "../nodes/OpenAiAssistant";
import { Node, type NodeProps } from "../../nodes/node";

export interface OpenAiAssistantProps extends NodeProps {
    readonly parameters: OpenAiAssistantNodeParameters;
    readonly openAiApiCredentials: Credentials<OpenAiApiCredentials>;
}

/**
 * Utilizes Assistant API from Open AI.
 */
export class OpenAiAssistant<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.openAiAssistant" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: OpenAiAssistantProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props!.openAiApiCredentials];
    }

    public withUndefined(next: State): this {
        super.addNext(next.startState, { type: "main", direction: "input" });
        return this;
    }

    public withTools(next: State): this {
        super.addNext(next.startState, { type: "ai_tool", direction: "input" });
        return this;
    }

}
