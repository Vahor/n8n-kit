// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BrandfetchApiCredentials } from "../credentials/BrandfetchApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { BrandfetchNodeParameters } from "../nodes/Brandfetch";
import { Node, type NodeProps } from "../../nodes/node";

export interface BrandfetchProps extends NodeProps {
    readonly parameters: BrandfetchNodeParameters;
    readonly brandfetchApiCredentials: Credentials<BrandfetchApiCredentials>;
}

/**
 * Consume Brandfetch API
 */
export class Brandfetch<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.Brandfetch" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: BrandfetchProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.brandfetchApiCredentials];
    }

}
