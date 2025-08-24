// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SlackApiCredentials } from "../credentials/SlackApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SlackTriggerNodeParameters } from "../nodes/SlackTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface SlackTriggerProps extends NodeProps {
    readonly parameters: SlackTriggerNodeParameters;
    readonly slackApiCredentials: Credentials<SlackApiCredentials>;
}

/**
 * Handle Slack events via webhooks
 */
export class SlackTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.slackTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: SlackTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.slackApiCredentials];
    }

}
