// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SalesforceOAuth2ApiCredentials } from "../credentials/SalesforceOAuth2Api.ts";
import type { SalesforceJwtApiCredentials } from "../credentials/SalesforceJwtApi.ts";
import type { Credentials } from "../../credentials";
import type { SalesforceNodeParameters } from "../nodes/Salesforce";
import { Node, type NodeProps } from "../../nodes/node";

export interface SalesforceProps extends NodeProps {
    readonly parameters: SalesforceNodeParameters;
    readonly salesforceOAuth2ApiCredentials?: Credentials<SalesforceOAuth2ApiCredentials>;
    readonly salesforceJwtApiCredentials?: Credentials<SalesforceJwtApiCredentials>;
}

/**
 * Consume Salesforce API
 */
export class Salesforce<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.salesforce" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: SalesforceProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.salesforceOAuth2ApiCredentials, this.props!.salesforceJwtApiCredentials];
    }

}
