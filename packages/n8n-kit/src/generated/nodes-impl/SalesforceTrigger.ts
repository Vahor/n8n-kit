// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SalesforceOAuth2ApiCredentials } from "../credentials/SalesforceOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { SalesforceTriggerNodeParameters } from "../nodes/SalesforceTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface SalesforceTriggerProps extends NodeProps, SalesforceTriggerNodeParameters {

    readonly salesforceOAuth2ApiCredentials: Credentials<SalesforceOAuth2ApiCredentials>;

}

export class SalesforceTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.salesforceTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: SalesforceTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { salesforceOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.salesforceOAuth2ApiCredentials];

    }


}

