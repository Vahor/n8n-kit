// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JwtAuthCredentials } from "../credentials/JwtAuth.ts";
import type { Credentials } from "../../credentials";
import type { RespondToWebhookNodeParameters } from "../nodes/RespondToWebhook";
import { Node, type NodeProps } from "../../nodes";

export interface RespondToWebhookProps extends NodeProps, RespondToWebhookNodeParameters {

    readonly jwtAuthCredentials?: Credentials<JwtAuthCredentials>;

}

export class RespondToWebhook<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.respondToWebhook" as const;
    protected typeVersion = 1.5 as const;

    constructor(id: L, public readonly props?: RespondToWebhookProps) {

        super(id, props);

    }

    override getParameters() : Omit<RespondToWebhookNodeParameters, "jwtAuthCredentials"> {

        const { jwtAuthCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.jwtAuthCredentials];

    }


}
