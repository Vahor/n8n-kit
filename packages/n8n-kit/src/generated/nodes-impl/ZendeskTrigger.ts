// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZendeskApiCredentials } from "../credentials/ZendeskApi.ts";
import type { ZendeskOAuth2ApiCredentials } from "../credentials/ZendeskOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ZendeskTriggerNodeParameters } from "../nodes/ZendeskTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ZendeskTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ZendeskTriggerNodeParameters;
    readonly zendeskApiCredentials?: Credentials<ZendeskApiCredentials>;
    readonly zendeskOAuth2ApiCredentials?: Credentials<ZendeskOAuth2ApiCredentials>;
}

/**
 * Handle Zendesk events via webhooks
 */
export class ZendeskTrigger<L extends string, C extends IContext = never, P extends ZendeskTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.zendeskTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.zendeskApiCredentials, this.props?.zendeskOAuth2ApiCredentials];
    }

}
