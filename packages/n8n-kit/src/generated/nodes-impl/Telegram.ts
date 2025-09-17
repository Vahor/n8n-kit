// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TelegramApiCredentials } from "../credentials/TelegramApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TelegramNodeParameters } from "../nodes/Telegram";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TelegramProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TelegramNodeParameters;
    readonly telegramApiCredentials: Credentials<TelegramApiCredentials>;
}

/**
 * Sends data to Telegram
 */
export class Telegram<L extends string, C extends IContext = never, P extends TelegramProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.telegram" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.telegramApiCredentials];
    }

}
