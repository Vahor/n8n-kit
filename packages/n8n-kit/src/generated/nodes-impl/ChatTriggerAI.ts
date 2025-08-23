// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { Credentials } from "../../credentials";
import type { ChatTriggerAINodeParameters } from "../nodes/ChatTriggerAI";
import { Node, type NodeProps } from "../../nodes";

export interface ChatTriggerAIProps extends NodeProps, ChatTriggerAINodeParameters {

    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;

}

export class ChatTriggerAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.chatTrigger" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props?: ChatTriggerAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<ChatTriggerAINodeParameters, "httpBasicAuthCredentials"> {

        const { httpBasicAuthCredentials:_0, ...rest } = this.props ?? {};
        return rest;

    }

    override getCredentials() {

        return [this.props?.httpBasicAuthCredentials];

    }


}
