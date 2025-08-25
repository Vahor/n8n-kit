// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FacebookGraphApiCredentials } from "../credentials/FacebookGraphApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FacebookGraphApiNodeParameters } from "../nodes/FacebookGraphApi";
import { Node, type NodeProps } from "../../nodes/node";

export interface FacebookGraphApiProps extends NodeProps {
    readonly parameters: FacebookGraphApiNodeParameters;
    readonly facebookGraphApiCredentials: Credentials<FacebookGraphApiCredentials>;
}

/**
 * Interacts with Facebook using the Graph API
 */
export class FacebookGraphApi<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.facebookGraphApi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: FacebookGraphApiProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.facebookGraphApiCredentials];
    }

}
