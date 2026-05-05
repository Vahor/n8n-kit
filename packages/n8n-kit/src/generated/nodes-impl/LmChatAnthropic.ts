// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AnthropicApiCredentials } from "../credentials/AnthropicApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatAnthropicNodeParameters } from "../nodes/LmChatAnthropic";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LmChatAnthropicProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LmChatAnthropicNodeParameters;
    readonly anthropicApiCredentials: Credentials<AnthropicApiCredentials>;
}

/**
 * Language Model Anthropic
 */
export class LmChatAnthropic<L extends string, C extends IContext = never, P extends LmChatAnthropicProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatAnthropic" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.anthropicApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
