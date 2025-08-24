// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JotFormApiCredentials } from "../credentials/JotFormApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { JotFormTriggerNodeParameters } from "../nodes/JotFormTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface JotFormTriggerProps extends NodeProps {
    readonly parameters: JotFormTriggerNodeParameters;
    readonly jotFormApiCredentials: Credentials<JotFormApiCredentials>;
}

/**
 * Handle JotForm events via webhooks
 */
export class JotFormTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.jotFormTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: JotFormTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.jotFormApiCredentials];
    }

}
