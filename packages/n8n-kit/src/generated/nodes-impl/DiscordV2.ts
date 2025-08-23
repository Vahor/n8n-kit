// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DiscordBotApiCredentials } from "../credentials/DiscordBotApi.ts";
import type { DiscordOAuth2ApiCredentials } from "../credentials/DiscordOAuth2Api.ts";
import type { DiscordWebhookApiCredentials } from "../credentials/DiscordWebhookApi.ts";
import type { Credentials } from "../../credentials";
import type { DiscordV2NodeParameters } from "../nodes/DiscordV2";
import { Node, type NodeProps } from "../../nodes";

export interface DiscordV2Props extends NodeProps, DiscordV2NodeParameters {

    readonly discordBotApiCredentials?: Credentials<DiscordBotApiCredentials>;
    readonly discordOAuth2ApiCredentials?: Credentials<DiscordOAuth2ApiCredentials>;
    readonly discordWebhookApiCredentials?: Credentials<DiscordWebhookApiCredentials>;

}

export class DiscordV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.discord" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props?: DiscordV2Props) {

        super(id, props);

    }

    override getParameters() : Omit<DiscordV2NodeParameters, "discordBotApiCredentials | discordOAuth2ApiCredentials | discordWebhookApiCredentials"> {

        const { discordBotApiCredentials:_0, discordOAuth2ApiCredentials:_1, discordWebhookApiCredentials:_2, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.discordBotApiCredentials, this.props.discordOAuth2ApiCredentials, this.props.discordWebhookApiCredentials];

    }


}

