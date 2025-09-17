// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AzureStorageOAuth2ApiCredentials } from "../credentials/AzureStorageOAuth2Api.ts";
import type { AzureStorageSharedKeyApiCredentials } from "../credentials/AzureStorageSharedKeyApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AzureStorageNodeParameters } from "../nodes/AzureStorage";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AzureStorageProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AzureStorageNodeParameters;
    readonly azureStorageOAuth2ApiCredentials?: Credentials<AzureStorageOAuth2ApiCredentials>;
    readonly azureStorageSharedKeyApiCredentials?: Credentials<AzureStorageSharedKeyApiCredentials>;
}

/**
 * Interact with Azure Storage API
 */
export class AzureStorage<L extends string, C extends IContext = never, P extends AzureStorageProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.azureStorage" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.azureStorageOAuth2ApiCredentials, this.props?.azureStorageSharedKeyApiCredentials];
    }

}
