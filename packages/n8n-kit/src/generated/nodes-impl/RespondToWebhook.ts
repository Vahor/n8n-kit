// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JwtAuthCredentials } from "../credentials/JwtAuth.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { RespondToWebhookNodeParameters } from "../nodes/RespondToWebhook";
import { Node, type NodeProps } from "../../nodes/node";

export interface RespondToWebhookProps extends NodeProps {
    readonly parameters: RespondToWebhookNodeParameters;
    readonly jwtAuthCredentials?: Credentials<JwtAuthCredentials>;
}

/**
 * Returns data for Webhook
 */
export class RespondToWebhook<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.respondToWebhook" as const;
    protected typeVersion = 1.5 as const;

    constructor(id: L, override props?: RespondToWebhookProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.jwtAuthCredentials];
    }

    public toCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: State): this {
        super.addNext(next.startState, { type });
        return this;
    }

}
