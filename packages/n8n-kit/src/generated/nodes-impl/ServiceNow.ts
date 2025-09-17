// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ServiceNowOAuth2ApiCredentials } from "../credentials/ServiceNowOAuth2Api.ts";
import type { ServiceNowBasicApiCredentials } from "../credentials/ServiceNowBasicApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ServiceNowNodeParameters } from "../nodes/ServiceNow";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ServiceNowProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ServiceNowNodeParameters;
    readonly serviceNowOAuth2ApiCredentials?: Credentials<ServiceNowOAuth2ApiCredentials>;
    readonly serviceNowBasicApiCredentials?: Credentials<ServiceNowBasicApiCredentials>;
}

/**
 * Consume ServiceNow API
 */
export class ServiceNow<L extends string, C extends IContext = never, P extends ServiceNowProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.serviceNow" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.serviceNowOAuth2ApiCredentials, this.props?.serviceNowBasicApiCredentials];
    }

}
