// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftAzureCosmosDbSharedKeyApiCredentials } from "../credentials/MicrosoftAzureCosmosDbSharedKeyApi.ts";
import type { Credentials } from "../../credentials";
import type { AzureCosmosDbNodeParameters } from "../nodes/AzureCosmosDb";
import { Node, type NodeProps } from "../../nodes";

export interface AzureCosmosDbProps extends NodeProps, AzureCosmosDbNodeParameters {

    readonly microsoftAzureCosmosDbSharedKeyApiCredentials: Credentials<MicrosoftAzureCosmosDbSharedKeyApiCredentials>;

}

export class AzureCosmosDb<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.azureCosmosDb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: AzureCosmosDbProps) {

        super(id, props);

    }

    override getParameters() : Omit<AzureCosmosDbNodeParameters, "microsoftAzureCosmosDbSharedKeyApiCredentials"> {

        const { microsoftAzureCosmosDbSharedKeyApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.microsoftAzureCosmosDbSharedKeyApiCredentials];

    }


}

