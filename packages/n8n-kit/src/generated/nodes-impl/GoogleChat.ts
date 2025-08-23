// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleChatOAuth2ApiCredentials } from "../credentials/GoogleChatOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleChatNodeParameters } from "../nodes/GoogleChat";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleChatProps extends NodeProps {

    readonly parameters: GoogleChatNodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleChatOAuth2ApiCredentials?: Credentials<GoogleChatOAuth2ApiCredentials>;

}

export class GoogleChat<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleChat" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: GoogleChatProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.googleApiCredentials, this.props!.googleChatOAuth2ApiCredentials];

    }


}
