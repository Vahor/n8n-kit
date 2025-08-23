// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TelegramApiCredentials } from "../credentials/TelegramApi.ts";
import type { Credentials } from "../../credentials";
import type { TelegramNodeParameters } from "../nodes/Telegram";
import { Node, type NodeProps } from "../../nodes";

export interface TelegramProps extends NodeProps, TelegramNodeParameters {

    readonly telegramApiCredentials: Credentials<TelegramApiCredentials>;

}

export class Telegram<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.telegram" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, public readonly props: TelegramProps) {

        super(id, props);

    }

    override getParameters() : Omit<TelegramNodeParameters, "telegramApiCredentials"> {

        const { telegramApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.telegramApiCredentials];

    }


}
