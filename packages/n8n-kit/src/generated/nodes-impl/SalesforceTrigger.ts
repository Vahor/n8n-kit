// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SalesforceOAuth2ApiCredentials } from "../credentials/SalesforceOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SalesforceTriggerNodeParameters } from "../nodes/SalesforceTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SalesforceTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SalesforceTriggerNodeParameters;
    readonly salesforceOAuth2ApiCredentials: Credentials<SalesforceOAuth2ApiCredentials>;
}

/**
 * Fetches data from Salesforce and starts the workflow on specified polling intervals.
 */
export class SalesforceTrigger<L extends string, C extends IContext = never, P extends SalesforceTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.salesforceTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.salesforceOAuth2ApiCredentials];
    }

}
