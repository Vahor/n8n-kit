// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ZohoOAuth2ApiCredentials } from "../credentials/ZohoOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ZohoCrmNodeParameters } from "../nodes/ZohoCrm";
import { Node, type NodeProps } from "../../nodes/node";

export interface ZohoCrmProps extends NodeProps {
    readonly parameters: ZohoCrmNodeParameters;
    readonly zohoOAuth2ApiCredentials: Credentials<ZohoOAuth2ApiCredentials>;
}

/**
 * Consume Zoho CRM API
 */
export class ZohoCrm<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.zohoCrm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ZohoCrmProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.zohoOAuth2ApiCredentials];
    }

}
