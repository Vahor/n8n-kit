// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AzureStorageOAuth2ApiCredentials } from "../credentials/AzureStorageOAuth2Api.ts";
import type { AzureStorageSharedKeyApiCredentials } from "../credentials/AzureStorageSharedKeyApi.ts";
import type { Credentials } from "../../credentials";
import type { AzureStorageNodeParameters } from "../nodes/AzureStorage";
import { Node, type NodeProps } from "../../nodes";

export interface AzureStorageProps extends NodeProps, AzureStorageNodeParameters {

    readonly azureStorageOAuth2ApiCredentials?: Credentials<AzureStorageOAuth2ApiCredentials>;
    readonly azureStorageSharedKeyApiCredentials?: Credentials<AzureStorageSharedKeyApiCredentials>;

}

export class AzureStorage<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.azureStorage" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: AzureStorageProps) {

        super(id, props);

    }

    override getParameters() : Omit<AzureStorageNodeParameters, "azureStorageOAuth2ApiCredentials | azureStorageSharedKeyApiCredentials"> {

        const { azureStorageOAuth2ApiCredentials:_0, azureStorageSharedKeyApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.azureStorageOAuth2ApiCredentials, this.props.azureStorageSharedKeyApiCredentials];

    }


}

