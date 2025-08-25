// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TelegramApiCredentials } from "../credentials/TelegramApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TelegramNodeParameters } from "../nodes/Telegram";
import { Node, type NodeProps } from "../../nodes/node";

export interface TelegramProps extends NodeProps {
    readonly parameters: TelegramNodeParameters;
    readonly telegramApiCredentials: Credentials<TelegramApiCredentials>;
}

/**
 * Sends data to Telegram
 */
export class Telegram<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.telegram" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props: TelegramProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.telegramApiCredentials];
    }

}
