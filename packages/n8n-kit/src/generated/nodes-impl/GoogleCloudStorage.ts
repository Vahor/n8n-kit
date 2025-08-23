// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleCloudStorageOAuth2ApiCredentials } from "../credentials/GoogleCloudStorageOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleCloudStorageNodeParameters } from "../nodes/GoogleCloudStorage";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleCloudStorageProps extends NodeProps, GoogleCloudStorageNodeParameters {

    readonly googleCloudStorageOAuth2ApiCredentials: Credentials<GoogleCloudStorageOAuth2ApiCredentials>;

}

export class GoogleCloudStorage<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleCloudStorage" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: GoogleCloudStorageProps) {

        super(id, props);

    }

    override getParameters() {

        const { googleCloudStorageOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleCloudStorageOAuth2ApiCredentials];

    }


}

