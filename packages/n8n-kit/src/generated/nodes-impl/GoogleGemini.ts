// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GooglePalmApiCredentials } from "../credentials/GooglePalmApi.ts";
import type { Credentials } from "../../credentials";
import type { GoogleGeminiNodeParameters } from "../nodes/GoogleGemini";
import { Node, type NodeProps } from "../../nodes";

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
    }

    override getCredentials() {
        return [this.props!.googlePalmApiCredentials];
    }

}
