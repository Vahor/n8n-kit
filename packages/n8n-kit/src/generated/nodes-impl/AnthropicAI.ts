// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AnthropicApiCredentials } from "../credentials/AnthropicApi.ts";
import type { Credentials } from "../../credentials";
import type { AnthropicAINodeParameters } from "../nodes/AnthropicAI";
import { Node, type NodeProps } from "../../nodes";

export interface AnthropicAIProps extends NodeProps, AnthropicAINodeParameters {

    readonly anthropicApiCredentials: Credentials<AnthropicApiCredentials>;

}

export class AnthropicAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.anthropic" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: AnthropicAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<AnthropicAINodeParameters, "anthropicApiCredentials"> {

        const { anthropicApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.anthropicApiCredentials];

    }


}
