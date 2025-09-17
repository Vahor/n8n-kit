// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MessageBirdApiCredentials } from "../credentials/MessageBirdApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MessageBirdNodeParameters } from "../nodes/MessageBird";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MessageBirdProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MessageBirdNodeParameters;
    readonly messageBirdApiCredentials: Credentials<MessageBirdApiCredentials>;
}

/**
 * Sends SMS via MessageBird
 */
export class MessageBird<L extends string, C extends IContext = never, P extends MessageBirdProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.messageBird" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.messageBirdApiCredentials];
    }

}
