// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GmailOAuth2ApiCredentials } from "../credentials/GmailOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GmailV1NodeParameters } from "../nodes/GmailV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface GmailV1Props extends NodeProps {
    readonly parameters: GmailV1NodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly gmailOAuth2Credentials?: Credentials<GmailOAuth2ApiCredentials>;
}

/**
 * Consume the Gmail API
 */
export class GmailV1<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.gmail" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: GmailV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleApiCredentials, this.props!.gmailOAuth2Credentials];
    }

}
