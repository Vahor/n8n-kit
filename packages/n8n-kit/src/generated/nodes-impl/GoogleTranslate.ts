// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleTranslateOAuth2ApiCredentials } from "../credentials/GoogleTranslateOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleTranslateNodeParameters } from "../nodes/GoogleTranslate";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleTranslateProps extends NodeProps {
    readonly parameters: GoogleTranslateNodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleTranslateOAuth2ApiCredentials?: Credentials<GoogleTranslateOAuth2ApiCredentials>;
}

/**
 * Translate data using Google Translate
 */
export class GoogleTranslate<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.googleTranslate" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: GoogleTranslateProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleApiCredentials, this.props!.googleTranslateOAuth2ApiCredentials];
    }

}
