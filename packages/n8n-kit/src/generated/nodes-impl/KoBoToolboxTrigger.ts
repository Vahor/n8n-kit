// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KoBoToolboxApiCredentials } from "../credentials/KoBoToolboxApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { KoBoToolboxTriggerNodeParameters } from "../nodes/KoBoToolboxTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface KoBoToolboxTriggerProps extends NodeProps {
    readonly parameters: KoBoToolboxTriggerNodeParameters;
    readonly koBoToolboxApiCredentials: Credentials<KoBoToolboxApiCredentials>;
}

/**
 * Process KoBoToolbox submissions
 */
export class KoBoToolboxTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.koBoToolboxTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: KoBoToolboxTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.koBoToolboxApiCredentials];
    }

}
