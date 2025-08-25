// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AzureStorageOAuth2ApiCredentials } from "../credentials/AzureStorageOAuth2Api.ts";
import type { AzureStorageSharedKeyApiCredentials } from "../credentials/AzureStorageSharedKeyApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AzureStorageNodeParameters } from "../nodes/AzureStorage";
import { Node, type NodeProps } from "../../nodes/node";

export interface AzureStorageProps extends NodeProps {
    readonly parameters: AzureStorageNodeParameters;
    readonly azureStorageOAuth2ApiCredentials?: Credentials<AzureStorageOAuth2ApiCredentials>;
    readonly azureStorageSharedKeyApiCredentials?: Credentials<AzureStorageSharedKeyApiCredentials>;
}

/**
 * Interact with Azure Storage API
 */
export class AzureStorage<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.azureStorage" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: AzureStorageProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.azureStorageOAuth2ApiCredentials, this.props!.azureStorageSharedKeyApiCredentials];
    }

}
