// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KoBoToolboxApiCredentials } from "../credentials/KoBoToolboxApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { KoBoToolboxNodeParameters } from "../nodes/KoBoToolbox";
import { Node, type NodeProps } from "../../nodes/node";

export interface KoBoToolboxProps extends NodeProps {
    readonly parameters: KoBoToolboxNodeParameters;
    readonly koBoToolboxApiCredentials: Credentials<KoBoToolboxApiCredentials>;
}

/**
 * Work with KoBoToolbox forms and submissions
 */
export class KoBoToolbox<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.koBoToolbox" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: KoBoToolboxProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.koBoToolboxApiCredentials];
    }

}
