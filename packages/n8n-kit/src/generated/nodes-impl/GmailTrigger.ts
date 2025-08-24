// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GmailOAuth2ApiCredentials } from "../credentials/GmailOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GmailTriggerNodeParameters } from "../nodes/GmailTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface GmailTriggerProps extends NodeProps {
    readonly parameters: GmailTriggerNodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly gmailOAuth2Credentials?: Credentials<GmailOAuth2ApiCredentials>;
}

/**
 * Fetches emails from Gmail and starts the workflow on specified polling intervals.
 */
export class GmailTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.gmailTrigger" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props?: GmailTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleApiCredentials, this.props!.gmailOAuth2Credentials];
    }

}
