// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SpontitApiCredentials } from "../credentials/SpontitApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SpontitNodeParameters } from "../nodes/Spontit";
import { Node, type NodeProps } from "../../nodes/node";

export interface SpontitProps extends NodeProps {
    readonly parameters: SpontitNodeParameters;
    readonly spontitApiCredentials: Credentials<SpontitApiCredentials>;
}

/**
 * Consume Spontit API
 */
export class Spontit<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.spontit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: SpontitProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.spontitApiCredentials];
    }

}
