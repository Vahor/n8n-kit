// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MispApiCredentials } from "../credentials/MispApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MispNodeParameters } from "../nodes/Misp";
import { Node, type NodeProps } from "../../nodes/node";

export interface MispProps extends NodeProps {
    readonly parameters: MispNodeParameters;
    readonly mispApiCredentials: Credentials<MispApiCredentials>;
}

/**
 * Consume the MISP API
 */
export class Misp<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.misp" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MispProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mispApiCredentials];
    }

}
