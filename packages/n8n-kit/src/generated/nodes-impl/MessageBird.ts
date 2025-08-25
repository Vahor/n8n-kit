// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MessageBirdApiCredentials } from "../credentials/MessageBirdApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MessageBirdNodeParameters } from "../nodes/MessageBird";
import { Node, type NodeProps } from "../../nodes/node";

export interface MessageBirdProps extends NodeProps {
    readonly parameters: MessageBirdNodeParameters;
    readonly messageBirdApiCredentials: Credentials<MessageBirdApiCredentials>;
}

/**
 * Sends SMS via MessageBird
 */
export class MessageBird<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.messageBird" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MessageBirdProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.messageBirdApiCredentials];
    }

}
