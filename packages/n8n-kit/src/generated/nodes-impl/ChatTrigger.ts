// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { Credentials } from "../../credentials";
import type { ChatTriggerNodeParameters } from "../nodes/ChatTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface ChatTriggerProps extends NodeProps, ChatTriggerNodeParameters {

    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;

}

export class ChatTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.chatTrigger" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props?: ChatTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<ChatTriggerNodeParameters, "httpBasicAuthCredentials"> {

        const { httpBasicAuthCredentials:_0, ...rest } = this.props ?? {};
        return rest;

    }

    override getCredentials() {

        return [this.props?.httpBasicAuthCredentials];

    }


}
