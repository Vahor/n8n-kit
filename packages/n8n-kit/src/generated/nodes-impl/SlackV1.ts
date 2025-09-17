// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SlackApiCredentials } from "../credentials/SlackApi.ts";
import type { SlackOAuth2ApiCredentials } from "../credentials/SlackOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SlackV1NodeParameters } from "../nodes/SlackV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SlackV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SlackV1NodeParameters;
    readonly slackApiCredentials?: Credentials<SlackApiCredentials>;
    readonly slackOAuth2ApiCredentials?: Credentials<SlackOAuth2ApiCredentials>;
}

/**
 * Consume Slack API
 */
export class SlackV1<L extends string, C extends IContext = never, P extends SlackV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.slack" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.slackApiCredentials, this.props?.slackOAuth2ApiCredentials];
    }

}
