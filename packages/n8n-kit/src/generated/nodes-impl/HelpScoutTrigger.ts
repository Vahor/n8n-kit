// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HelpScoutOAuth2ApiCredentials } from "../credentials/HelpScoutOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { HelpScoutTriggerNodeParameters } from "../nodes/HelpScoutTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface HelpScoutTriggerProps extends NodeProps, HelpScoutTriggerNodeParameters {

    readonly helpScoutOAuth2ApiCredentials: Credentials<HelpScoutOAuth2ApiCredentials>;

}

export class HelpScoutTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.helpScoutTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: HelpScoutTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<HelpScoutTriggerNodeParameters, "helpScoutOAuth2ApiCredentials"> {

        const { helpScoutOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.helpScoutOAuth2ApiCredentials];

    }


}

