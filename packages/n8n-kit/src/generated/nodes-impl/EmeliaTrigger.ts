// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { EmeliaApiCredentials } from "../credentials/EmeliaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { EmeliaTriggerNodeParameters } from "../nodes/EmeliaTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface EmeliaTriggerProps extends NodeProps {
    readonly parameters: EmeliaTriggerNodeParameters;
    readonly emeliaApiCredentials: Credentials<EmeliaApiCredentials>;
}

/**
 * Handle Emelia campaign activity events via webhooks
 */
export class EmeliaTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.emeliaTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: EmeliaTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.emeliaApiCredentials];
    }

}
