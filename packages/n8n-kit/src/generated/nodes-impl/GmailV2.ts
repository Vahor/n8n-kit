// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GmailOAuth2ApiCredentials } from "../credentials/GmailOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GmailV2NodeParameters } from "../nodes/GmailV2";
import { Node, type NodeProps } from "../../nodes";

export interface GmailV2Props extends NodeProps, GmailV2NodeParameters {

    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly gmailOAuth2Credentials?: Credentials<GmailOAuth2ApiCredentials>;

}

export class GmailV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.gmail" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, public readonly props?: GmailV2Props) {

        super(id, props);

    }

    override getParameters() : Omit<GmailV2NodeParameters, "googleApiCredentials | gmailOAuth2Credentials"> {

        const { googleApiCredentials:_0, gmailOAuth2Credentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleApiCredentials, this.props.gmailOAuth2Credentials];

    }


}
