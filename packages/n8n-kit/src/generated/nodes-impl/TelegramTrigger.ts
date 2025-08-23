// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TelegramApiCredentials } from "../credentials/TelegramApi.ts";
import type { Credentials } from "../../credentials";
import type { TelegramTriggerNodeParameters } from "../nodes/TelegramTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface TelegramTriggerProps extends NodeProps {

    readonly parameters: TelegramTriggerNodeParameters;
    readonly telegramApiCredentials: Credentials<TelegramApiCredentials>;

}

export class TelegramTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.telegramTrigger" as const;
    protected typeVersion = 1.2 as const;

    constructor(id: L, override props: TelegramTriggerProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.telegramApiCredentials];

    }


}
