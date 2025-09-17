// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GroqApiCredentials } from "../credentials/GroqApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatGroqNodeParameters } from "../nodes/LmChatGroq";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LmChatGroqProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LmChatGroqNodeParameters;
    readonly groqApiCredentials: Credentials<GroqApiCredentials>;
}

/**
 * Language Model Groq
 */
export class LmChatGroq<L extends string, C extends IContext = never, P extends LmChatGroqProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatGroq" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.groqApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
