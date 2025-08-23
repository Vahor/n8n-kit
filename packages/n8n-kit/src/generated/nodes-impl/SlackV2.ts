// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SlackApiCredentials } from "../credentials/SlackApi.ts";
import type { SlackOAuth2ApiCredentials } from "../credentials/SlackOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { SlackV2NodeParameters } from "../nodes/SlackV2";
import { Node, type NodeProps } from "../../nodes";

export interface SlackV2Props extends NodeProps, SlackV2NodeParameters {

    readonly slackApiCredentials?: Credentials<SlackApiCredentials>;
    readonly slackOAuth2ApiCredentials?: Credentials<SlackOAuth2ApiCredentials>;

}

export class SlackV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.undefined" as const;
    protected typeVersion = 2.3 as const;

    constructor(id: L, public readonly props?: SlackV2Props) {

        super(id, props);

    }

    override getParameters() : Omit<SlackV2NodeParameters, "slackApiCredentials | slackOAuth2ApiCredentials"> {

        const { slackApiCredentials:_0, slackOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.slackApiCredentials, this.props.slackOAuth2ApiCredentials];

    }


}
