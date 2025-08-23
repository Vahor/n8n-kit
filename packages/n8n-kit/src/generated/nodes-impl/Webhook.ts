// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { HttpHeaderAuthCredentials } from "../credentials/HttpHeaderAuth.ts";
import type { JwtAuthCredentials } from "../credentials/JwtAuth.ts";
import type { Credentials } from "../../credentials";
import type { WebhookNodeParameters } from "../nodes/Webhook";
import { Node, type NodeProps } from "../../nodes";

export interface WebhookProps extends NodeProps {
    readonly parameters: WebhookNodeParameters;
    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;
    readonly httpHeaderAuthCredentials?: Credentials<HttpHeaderAuthCredentials>;
    readonly jwtAuthCredentials?: Credentials<JwtAuthCredentials>;
}

/**
 * Starts the workflow when a webhook is called
 */
export class Webhook<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.webhook" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, override props?: WebhookProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.httpBasicAuthCredentials, this.props!.httpHeaderAuthCredentials, this.props!.jwtAuthCredentials];
    }

}
