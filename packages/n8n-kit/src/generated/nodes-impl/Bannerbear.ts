// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BannerbearApiCredentials } from "../credentials/BannerbearApi.ts";
import type { Credentials } from "../../credentials";
import type { BannerbearNodeParameters } from "../nodes/Bannerbear";
import { Node, type NodeProps } from "../../nodes";

export interface BannerbearProps extends NodeProps {
    readonly parameters: BannerbearNodeParameters;
    readonly bannerbearApiCredentials: Credentials<BannerbearApiCredentials>;
}

/**
 * Consume Bannerbear API
 */
export class Bannerbear<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.bannerbear" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: BannerbearProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.bannerbearApiCredentials];
    }

}
