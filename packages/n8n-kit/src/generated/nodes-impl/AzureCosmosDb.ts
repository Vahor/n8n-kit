// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftAzureCosmosDbSharedKeyApiCredentials } from "../credentials/MicrosoftAzureCosmosDbSharedKeyApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AzureCosmosDbNodeParameters } from "../nodes/AzureCosmosDb";
import { Node, type NodeProps } from "../../nodes/node";

export interface AzureCosmosDbProps extends NodeProps {
    readonly parameters: AzureCosmosDbNodeParameters;
    readonly microsoftAzureCosmosDbSharedKeyApiCredentials: Credentials<MicrosoftAzureCosmosDbSharedKeyApiCredentials>;
}

/**
 * Interact with Azure Cosmos DB API
 */
export class AzureCosmosDb<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.azureCosmosDb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AzureCosmosDbProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.microsoftAzureCosmosDbSharedKeyApiCredentials];
    }

}
