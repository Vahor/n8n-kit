// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JwtAuthCredentials } from "../credentials/JwtAuth.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { RespondToWebhookNodeParameters } from "../nodes/RespondToWebhook";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RespondToWebhookProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RespondToWebhookNodeParameters;
    readonly jwtAuthCredentials?: Credentials<JwtAuthCredentials>;
}

/**
 * Returns data for Webhook
 */
export class RespondToWebhook<L extends string, C extends IContext = never, P extends RespondToWebhookProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.respondToWebhook" as const;
    protected typeVersion = 1.5 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.jwtAuthCredentials];
    }

    public toCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: IChainable): this {
        super.addNext(next.startState, { type });
        return this;
    }

}
