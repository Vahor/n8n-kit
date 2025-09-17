// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SlackApiCredentials } from "../credentials/SlackApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SlackTriggerNodeParameters } from "../nodes/SlackTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SlackTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SlackTriggerNodeParameters;
    readonly slackApiCredentials: Credentials<SlackApiCredentials>;
}

/**
 * Handle Slack events via webhooks
 */
export class SlackTrigger<L extends string, C extends IContext = never, P extends SlackTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.slackTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.slackApiCredentials];
    }

}
