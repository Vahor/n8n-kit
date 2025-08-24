// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleDriveOAuth2ApiCredentials } from "../credentials/GoogleDriveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleDriveTriggerNodeParameters } from "../nodes/GoogleDriveTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface GoogleDriveTriggerProps extends NodeProps {
    readonly parameters: GoogleDriveTriggerNodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleDriveOAuth2ApiCredentials?: Credentials<GoogleDriveOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Google Drive events occur
 */
export class GoogleDriveTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.googleDriveTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: GoogleDriveTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleApiCredentials, this.props!.googleDriveOAuth2ApiCredentials];
    }

}
