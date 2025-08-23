// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AnthropicApiCredentials } from "../credentials/AnthropicApi.ts";
import type { Credentials } from "../../credentials";
import type { AnthropicNodeParameters } from "../nodes/Anthropic";
import { Node, type NodeProps } from "../../nodes";

export interface AnthropicProps extends NodeProps {
    readonly parameters: AnthropicNodeParameters;
    readonly anthropicApiCredentials: Credentials<AnthropicApiCredentials>;
}

/**
 * Interact with Anthropic AI models
 */
export class Anthropic<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.anthropic" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AnthropicProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.anthropicApiCredentials];
    }

}
