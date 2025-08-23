// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleDriveOAuth2ApiCredentials } from "../credentials/GoogleDriveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleDriveV1NodeParameters } from "../nodes/GoogleDriveV1";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleDriveV1Props extends NodeProps, GoogleDriveV1NodeParameters {

    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleDriveOAuth2ApiCredentials?: Credentials<GoogleDriveOAuth2ApiCredentials>;

}

export class GoogleDriveV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleDrive" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props?: GoogleDriveV1Props) {

        super(id, props);

    }

    override getParameters() : Omit<GoogleDriveV1NodeParameters, "googleApiCredentials | googleDriveOAuth2ApiCredentials"> {

        const { googleApiCredentials:_0, googleDriveOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleApiCredentials, this.props.googleDriveOAuth2ApiCredentials];

    }


}

