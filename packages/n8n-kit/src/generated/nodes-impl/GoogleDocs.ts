// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleDocsOAuth2ApiCredentials } from "../credentials/GoogleDocsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleDocsNodeParameters } from "../nodes/GoogleDocs";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleDocsProps extends NodeProps {
    readonly parameters: GoogleDocsNodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleDocsOAuth2ApiCredentials?: Credentials<GoogleDocsOAuth2ApiCredentials>;
}

/**
 * Consume Google Docs API.
 */
export class GoogleDocs<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.googleDocs" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: GoogleDocsProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleApiCredentials, this.props!.googleDocsOAuth2ApiCredentials];
    }

}
