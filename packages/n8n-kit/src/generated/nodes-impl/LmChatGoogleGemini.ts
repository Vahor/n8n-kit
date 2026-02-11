// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GooglePalmApiCredentials } from "../credentials/GooglePalmApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatGoogleGeminiNodeParameters } from "../nodes/LmChatGoogleGemini";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LmChatGoogleGeminiProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LmChatGoogleGeminiNodeParameters;
    readonly googlePalmApiCredentials: Credentials<GooglePalmApiCredentials>;
}

/**
 * Chat Model Google Gemini
 */
export class LmChatGoogleGemini<L extends string, C extends IContext = never, P extends LmChatGoogleGeminiProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatGoogleGemini" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.googlePalmApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
