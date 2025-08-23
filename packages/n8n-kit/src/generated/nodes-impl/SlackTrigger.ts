// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SlackApiCredentials } from "../credentials/SlackApi.ts";
import type { Credentials } from "../../credentials";
import type { SlackTriggerNodeParameters } from "../nodes/SlackTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface SlackTriggerProps extends NodeProps {
    readonly parameters: SlackTriggerNodeParameters;
    readonly slackApiCredentials: Credentials<SlackApiCredentials>;
}

/**
 * Handle Slack events via webhooks
 */
export class SlackTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.slackTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: SlackTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.slackApiCredentials];
    }

}
