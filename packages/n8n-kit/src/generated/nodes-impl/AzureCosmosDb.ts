// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftAzureCosmosDbSharedKeyApiCredentials } from "../credentials/MicrosoftAzureCosmosDbSharedKeyApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AzureCosmosDbNodeParameters } from "../nodes/AzureCosmosDb";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AzureCosmosDbProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AzureCosmosDbNodeParameters;
    readonly microsoftAzureCosmosDbSharedKeyApiCredentials: Credentials<MicrosoftAzureCosmosDbSharedKeyApiCredentials>;
}

/**
 * Interact with Azure Cosmos DB API
 */
export class AzureCosmosDb<L extends string, C extends IContext = never, P extends AzureCosmosDbProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.azureCosmosDb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.microsoftAzureCosmosDbSharedKeyApiCredentials];
    }

}
