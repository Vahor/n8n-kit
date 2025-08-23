// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleDriveOAuth2ApiCredentials } from "../credentials/GoogleDriveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleDriveTriggerNodeParameters } from "../nodes/GoogleDriveTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleDriveTriggerProps extends NodeProps, GoogleDriveTriggerNodeParameters {

    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleDriveOAuth2ApiCredentials?: Credentials<GoogleDriveOAuth2ApiCredentials>;

}

export class GoogleDriveTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleDriveTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: GoogleDriveTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<GoogleDriveTriggerNodeParameters, "googleApiCredentials | googleDriveOAuth2ApiCredentials"> {

        const { googleApiCredentials:_0, googleDriveOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleApiCredentials, this.props.googleDriveOAuth2ApiCredentials];

    }


}
