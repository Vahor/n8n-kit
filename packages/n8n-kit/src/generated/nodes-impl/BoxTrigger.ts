// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BoxOAuth2ApiCredentials } from "../credentials/BoxOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { BoxTriggerNodeParameters } from "../nodes/BoxTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface BoxTriggerProps extends NodeProps {
    readonly parameters: BoxTriggerNodeParameters;
    readonly boxOAuth2ApiCredentials: Credentials<BoxOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Box events occur
 */
export class BoxTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.boxTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: BoxTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.boxOAuth2ApiCredentials];
    }

}
