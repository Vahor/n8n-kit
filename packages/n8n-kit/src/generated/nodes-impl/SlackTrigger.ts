// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SlackApiCredentials } from "../credentials/SlackApi.ts";
import type { Credentials } from "../../credentials";
import type { SlackTriggerNodeParameters } from "../nodes/SlackTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface SlackTriggerProps extends NodeProps, SlackTriggerNodeParameters {

    readonly slackApiCredentials: Credentials<SlackApiCredentials>;

}

export class SlackTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.slackTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: SlackTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<SlackTriggerNodeParameters, "slackApiCredentials"> {

        const { slackApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.slackApiCredentials];

    }


}
