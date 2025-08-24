// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PeekalinkApiCredentials } from "../credentials/PeekalinkApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PeekalinkNodeParameters } from "../nodes/Peekalink";
import { Node, type NodeProps } from "../../nodes/node";

export interface PeekalinkProps extends NodeProps {
    readonly parameters: PeekalinkNodeParameters;
    readonly peekalinkApiCredentials: Credentials<PeekalinkApiCredentials>;
}

/**
 * Consume the Peekalink API
 */
export class Peekalink<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.peekalink" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PeekalinkProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.peekalinkApiCredentials];
    }

}
