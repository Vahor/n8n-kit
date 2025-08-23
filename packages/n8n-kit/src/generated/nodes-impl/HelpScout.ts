// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HelpScoutOAuth2ApiCredentials } from "../credentials/HelpScoutOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { HelpScoutNodeParameters } from "../nodes/HelpScout";
import { Node, type NodeProps } from "../../nodes";

export interface HelpScoutProps extends NodeProps, HelpScoutNodeParameters {

    readonly helpScoutOAuth2ApiCredentials: Credentials<HelpScoutOAuth2ApiCredentials>;

}

export class HelpScout<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.helpScout" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: HelpScoutProps) {

        super(id, props);

    }

    override getParameters() : Omit<HelpScoutNodeParameters, "helpScoutOAuth2ApiCredentials"> {

        const { helpScoutOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.helpScoutOAuth2ApiCredentials];

    }


}
