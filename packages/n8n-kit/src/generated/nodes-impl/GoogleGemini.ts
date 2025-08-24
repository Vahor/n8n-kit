// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GooglePalmApiCredentials } from "../credentials/GooglePalmApi.ts";
import type { Credentials } from "../../credentials";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { GoogleGeminiNodeParameters } from "../nodes/GoogleGemini";
import { Node, type NodeProps } from "../../nodes/node";

export interface GoogleGeminiProps extends NodeProps {
    readonly parameters: GoogleGeminiNodeParameters;
    readonly googlePalmApiCredentials: Credentials<GooglePalmApiCredentials>;
}

/**
 * Interact with Google Gemini AI models
 */
export class GoogleGemini<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.googleGemini" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: GoogleGeminiProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props!.googlePalmApiCredentials];
    }

    public withCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type, direction: "input" });
        return this;
    }

}
