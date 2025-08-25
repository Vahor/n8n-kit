// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleChatOAuth2ApiCredentials } from "../credentials/GoogleChatOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleChatNodeParameters } from "../nodes/GoogleChat";
import { Node, type NodeProps } from "../../nodes/node";

export interface GoogleChatProps extends NodeProps {
    readonly parameters: GoogleChatNodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleChatOAuth2ApiCredentials?: Credentials<GoogleChatOAuth2ApiCredentials>;
}

/**
 * Consume Google Chat API
 */
export class GoogleChat<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.googleChat" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: GoogleChatProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleApiCredentials, this.props!.googleChatOAuth2ApiCredentials];
    }

}
