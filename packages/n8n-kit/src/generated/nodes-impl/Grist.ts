// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GristApiCredentials } from "../credentials/GristApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GristNodeParameters } from "../nodes/Grist";
import { Node, type NodeProps } from "../../nodes/node";

export interface GristProps extends NodeProps {
    readonly parameters: GristNodeParameters;
    readonly gristApiCredentials: Credentials<GristApiCredentials>;
}

/**
 * Consume the Grist API
 */
export class Grist<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.grist" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: GristProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.gristApiCredentials];
    }

}
