// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SlackApiCredentials } from "../credentials/SlackApi.ts";
import type { SlackOAuth2ApiCredentials } from "../credentials/SlackOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SlackV2NodeParameters } from "../nodes/SlackV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SlackV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SlackV2NodeParameters;
    readonly slackApiCredentials?: Credentials<SlackApiCredentials>;
    readonly slackOAuth2ApiCredentials?: Credentials<SlackOAuth2ApiCredentials>;
}

/**
 * Consume Slack API
 */
export class SlackV2<L extends string, C extends IContext = never, P extends SlackV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.slack" as const;
    protected typeVersion = 2.4 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.slackApiCredentials, this.props?.slackOAuth2ApiCredentials];
    }

}
