// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { XAiApiCredentials } from "../credentials/XAiApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatXAiGrokNodeParameters } from "../nodes/LmChatXAiGrok";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LmChatXAiGrokProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LmChatXAiGrokNodeParameters;
    readonly xAiApiCredentials: Credentials<XAiApiCredentials>;
}

/**
 * For advanced usage with an AI chain
 */
export class LmChatXAiGrok<L extends string, C extends IContext = never, P extends LmChatXAiGrokProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatXAiGrok" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.xAiApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
