// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleBusinessProfileOAuth2ApiCredentials } from "../credentials/GoogleBusinessProfileOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleBusinessProfileTriggerNodeParameters } from "../nodes/GoogleBusinessProfileTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleBusinessProfileTriggerProps extends NodeProps, GoogleBusinessProfileTriggerNodeParameters {

    readonly googleBusinessProfileOAuth2ApiCredentials: Credentials<GoogleBusinessProfileOAuth2ApiCredentials>;

}

export class GoogleBusinessProfileTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleBusinessProfileTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: GoogleBusinessProfileTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<GoogleBusinessProfileTriggerNodeParameters, "googleBusinessProfileOAuth2ApiCredentials"> {

        const { googleBusinessProfileOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleBusinessProfileOAuth2ApiCredentials];

    }


}
