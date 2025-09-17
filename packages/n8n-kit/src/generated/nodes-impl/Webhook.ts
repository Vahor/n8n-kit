// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { HttpHeaderAuthCredentials } from "../credentials/HttpHeaderAuth.ts";
import type { JwtAuthCredentials } from "../credentials/JwtAuth.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { WebhookNodeParameters } from "../nodes/Webhook";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WebhookProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WebhookNodeParameters;
    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;
    readonly httpHeaderAuthCredentials?: Credentials<HttpHeaderAuthCredentials>;
    readonly jwtAuthCredentials?: Credentials<JwtAuthCredentials>;
}

/**
 * Starts the workflow when a webhook is called
 */
export class Webhook<L extends string, C extends IContext = never, P extends WebhookProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.webhook" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.httpBasicAuthCredentials, this.props?.httpHeaderAuthCredentials, this.props?.jwtAuthCredentials];
    }

    public toCustom(type: "ai_textSplitter" | "ai_embedding" | "ai_document" | "ai_languageModel" | "ai_memory" | "ai_tool" | "ai_vectorStore" | "ai_outputParser", next: IChainable): this {
        super.addNext(next.startState, { type });
        return this;
    }

}
