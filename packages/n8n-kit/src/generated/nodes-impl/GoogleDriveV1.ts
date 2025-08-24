// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleDriveOAuth2ApiCredentials } from "../credentials/GoogleDriveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleDriveV1NodeParameters } from "../nodes/GoogleDriveV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface GoogleDriveV1Props extends NodeProps {
    readonly parameters: GoogleDriveV1NodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleDriveOAuth2ApiCredentials?: Credentials<GoogleDriveOAuth2ApiCredentials>;
}

/**
 * Access data on Google Drive
 */
export class GoogleDriveV1<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.googleDrive" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: GoogleDriveV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleApiCredentials, this.props!.googleDriveOAuth2ApiCredentials];
    }

}
