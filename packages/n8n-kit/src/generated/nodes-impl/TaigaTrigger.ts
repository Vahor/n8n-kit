// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TaigaApiCredentials } from "../credentials/TaigaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TaigaTriggerNodeParameters } from "../nodes/TaigaTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface TaigaTriggerProps extends NodeProps {
    readonly parameters: TaigaTriggerNodeParameters;
    readonly taigaApiCredentials: Credentials<TaigaApiCredentials>;
}

/**
 * Handle Taiga events via webhook
 */
export class TaigaTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.taigaTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TaigaTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.taigaApiCredentials];
    }

}
