// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GmailOAuth2ApiCredentials } from "../credentials/GmailOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GmailTriggerNodeParameters } from "../nodes/GmailTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface GmailTriggerProps extends NodeProps, GmailTriggerNodeParameters {

    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly gmailOAuth2Credentials?: Credentials<GmailOAuth2ApiCredentials>;

}

export class GmailTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.gmailTrigger" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, public readonly props?: GmailTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<GmailTriggerNodeParameters, "googleApiCredentials | gmailOAuth2Credentials"> {

        const { googleApiCredentials:_0, gmailOAuth2Credentials:_1, ...rest } = this.props ?? {};
        return rest;

    }

    override getCredentials() {

        return [this.props?.googleApiCredentials, this.props?.gmailOAuth2Credentials];

    }


}
