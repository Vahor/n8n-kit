// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GooglePalmApiCredentials } from "../credentials/GooglePalmApi.ts";
import type { Credentials } from "../../credentials";
import type { IChainable } from "../../workflow/chain/types";
import type { LmChatGoogleGeminiNodeParameters } from "../nodes/LmChatGoogleGemini";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatGoogleGeminiProps extends NodeProps {
    readonly parameters: LmChatGoogleGeminiNodeParameters;
    readonly googlePalmApiCredentials: Credentials<GooglePalmApiCredentials>;
}

/**
 * Chat Model Google Gemini
 */
export class LmChatGoogleGemini<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatGoogleGemini" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LmChatGoogleGeminiProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googlePalmApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
