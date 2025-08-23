// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AnthropicApiCredentials } from "../credentials/AnthropicApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatAnthropicNodeParameters } from "../nodes/LmChatAnthropic";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatAnthropicProps extends NodeProps, LmChatAnthropicNodeParameters {

    readonly anthropicApiCredentials: Credentials<AnthropicApiCredentials>;

}

export class LmChatAnthropic<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatAnthropic" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props: LmChatAnthropicProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatAnthropicNodeParameters, "anthropicApiCredentials"> {

        const { anthropicApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.anthropicApiCredentials];

    }


}
