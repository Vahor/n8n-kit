// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DeepSeekApiCredentials } from "../credentials/DeepSeekApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatDeepSeekNodeParameters } from "../nodes/LmChatDeepSeek";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LmChatDeepSeekProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LmChatDeepSeekNodeParameters;
    readonly deepSeekApiCredentials: Credentials<DeepSeekApiCredentials>;
}

/**
 * For advanced usage with an AI chain
 */
export class LmChatDeepSeek<L extends string, C extends IContext = never, P extends LmChatDeepSeekProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatDeepSeek" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.deepSeekApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
