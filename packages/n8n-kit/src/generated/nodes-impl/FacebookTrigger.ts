// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FacebookGraphAppApiCredentials } from "../credentials/FacebookGraphAppApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FacebookTriggerNodeParameters } from "../nodes/FacebookTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface FacebookTriggerProps extends NodeProps {
    readonly parameters: FacebookTriggerNodeParameters;
    readonly facebookGraphAppApiCredentials: Credentials<FacebookGraphAppApiCredentials>;
}

/**
 * Starts the workflow when Facebook events occur
 */
export class FacebookTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.facebookTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: FacebookTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.facebookGraphAppApiCredentials];
    }

}
