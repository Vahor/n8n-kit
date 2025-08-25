// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenAiApiCredentials } from "../credentials/OpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmOpenAiNodeParameters } from "../nodes/LmOpenAi";
import { Node, type NodeProps } from "../../nodes/node";

export interface LmOpenAiProps extends NodeProps {
    readonly parameters: LmOpenAiNodeParameters;
    readonly openAiApiCredentials: Credentials<OpenAiApiCredentials>;
}

/**
 * For advanced usage with an AI chain
 */
export class LmOpenAi<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "@n8n/n8n-nodes-langchain.lmOpenAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LmOpenAiProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.openAiApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
