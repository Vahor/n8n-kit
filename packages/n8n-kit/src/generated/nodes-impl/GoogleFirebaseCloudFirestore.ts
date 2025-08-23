// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleFirebaseCloudFirestoreOAuth2ApiCredentials } from "../credentials/GoogleFirebaseCloudFirestoreOAuth2Api.ts";
import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { Credentials } from "../../credentials";
import type { GoogleFirebaseCloudFirestoreNodeParameters } from "../nodes/GoogleFirebaseCloudFirestore";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleFirebaseCloudFirestoreProps extends NodeProps, GoogleFirebaseCloudFirestoreNodeParameters {

    readonly googleFirebaseCloudFirestoreOAuth2ApiCredentials?: Credentials<GoogleFirebaseCloudFirestoreOAuth2ApiCredentials>;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;

}

export class GoogleFirebaseCloudFirestore<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleFirebaseCloudFirestore" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: GoogleFirebaseCloudFirestoreProps) {

        super(id, props);

    }

    override getParameters() : Omit<GoogleFirebaseCloudFirestoreNodeParameters, "googleFirebaseCloudFirestoreOAuth2ApiCredentials | googleApiCredentials"> {

        const { googleFirebaseCloudFirestoreOAuth2ApiCredentials:_0, googleApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleFirebaseCloudFirestoreOAuth2ApiCredentials, this.props.googleApiCredentials];

    }


}
