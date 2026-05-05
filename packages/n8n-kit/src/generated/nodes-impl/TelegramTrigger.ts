// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TelegramApiCredentials } from "../credentials/TelegramApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TelegramTriggerNodeParameters } from "../nodes/TelegramTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TelegramTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TelegramTriggerNodeParameters;
    readonly telegramApiCredentials: Credentials<TelegramApiCredentials>;
}

/**
 * Starts the workflow on a Telegram update
 */
export class TelegramTrigger<L extends string, C extends IContext = never, P extends TelegramTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.telegramTrigger" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.telegramApiCredentials];
    }

}
