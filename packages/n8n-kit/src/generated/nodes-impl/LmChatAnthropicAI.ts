// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AnthropicApiCredentials } from "../credentials/AnthropicApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatAnthropicAINodeParameters } from "../nodes/LmChatAnthropicAI";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatAnthropicAIProps extends NodeProps, LmChatAnthropicAINodeParameters {

    readonly anthropicApiCredentials: Credentials<AnthropicApiCredentials>;

}

export class LmChatAnthropicAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatAnthropic" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: LmChatAnthropicAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatAnthropicAINodeParameters, "anthropicApiCredentials"> {

        const { anthropicApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.anthropicApiCredentials];

    }


}

