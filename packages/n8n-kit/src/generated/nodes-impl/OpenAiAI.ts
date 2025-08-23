// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenAiApiCredentials } from "../credentials/OpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { OpenAiAINodeParameters } from "../nodes/OpenAiAI";
import { Node, type NodeProps } from "../../nodes";

export interface OpenAiAIProps extends NodeProps {
    readonly parameters: OpenAiAINodeParameters;
    readonly openAiApiCredentials: Credentials<OpenAiApiCredentials>;
}

/**
 * Message an assistant or GPT, analyze images, generate audio, etc.
 */
export class OpenAiAI<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.openAi" as const;
    protected typeVersion = 1.8 as const;

    constructor(id: L, override props: OpenAiAIProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.openAiApiCredentials];
    }

}
