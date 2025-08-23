// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { Credentials } from "../../credentials";
import type { ChatTriggerNodeParameters } from "../nodes/ChatTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface ChatTriggerProps extends NodeProps {

    readonly parameters: ChatTriggerNodeParameters;
    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;

}

/**
 * Runs the workflow when an n8n generated webchat is submitted
 */
export class ChatTrigger<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.chatTrigger" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props?: ChatTriggerProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.httpBasicAuthCredentials];

    }


}
