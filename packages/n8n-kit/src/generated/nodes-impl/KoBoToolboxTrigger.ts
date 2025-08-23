// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KoBoToolboxApiCredentials } from "../credentials/KoBoToolboxApi.ts";
import type { Credentials } from "../../credentials";
import type { KoBoToolboxTriggerNodeParameters } from "../nodes/KoBoToolboxTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface KoBoToolboxTriggerProps extends NodeProps {

    readonly parameters: KoBoToolboxTriggerNodeParameters;
    readonly koBoToolboxApiCredentials: Credentials<KoBoToolboxApiCredentials>;

}

/**
 * Process KoBoToolbox submissions
 */
export class KoBoToolboxTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.koBoToolboxTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: KoBoToolboxTriggerProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.koBoToolboxApiCredentials];

    }


}
