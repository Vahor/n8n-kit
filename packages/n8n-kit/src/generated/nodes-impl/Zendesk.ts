// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZendeskApiCredentials } from "../credentials/ZendeskApi.ts";
import type { ZendeskOAuth2ApiCredentials } from "../credentials/ZendeskOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { ZendeskNodeParameters } from "../nodes/Zendesk";
import { Node, type NodeProps } from "../../nodes";

export interface ZendeskProps extends NodeProps {

    readonly parameters: ZendeskNodeParameters;
    readonly zendeskApiCredentials?: Credentials<ZendeskApiCredentials>;
    readonly zendeskOAuth2ApiCredentials?: Credentials<ZendeskOAuth2ApiCredentials>;

}

/**
 * Consume Zendesk API
 */
export class Zendesk<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.zendesk" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ZendeskProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.zendeskApiCredentials, this.props!.zendeskOAuth2ApiCredentials];

    }


}
