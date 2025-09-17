// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { DiscordBotApiCredentials } from "../credentials/DiscordBotApi.ts";
import type { DiscordOAuth2ApiCredentials } from "../credentials/DiscordOAuth2Api.ts";
import type { DiscordWebhookApiCredentials } from "../credentials/DiscordWebhookApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { DiscordV2NodeParameters } from "../nodes/DiscordV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface DiscordV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: DiscordV2NodeParameters;
    readonly discordBotApiCredentials?: Credentials<DiscordBotApiCredentials>;
    readonly discordOAuth2ApiCredentials?: Credentials<DiscordOAuth2ApiCredentials>;
    readonly discordWebhookApiCredentials?: Credentials<DiscordWebhookApiCredentials>;
}

/**
 * Sends data to Discord
 */
export class DiscordV2<L extends string, C extends IContext = never, P extends DiscordV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.discord" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.discordBotApiCredentials, this.props?.discordOAuth2ApiCredentials, this.props?.discordWebhookApiCredentials];
    }

}
