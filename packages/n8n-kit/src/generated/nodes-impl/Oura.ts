// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OuraApiCredentials } from "../credentials/OuraApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { OuraNodeParameters } from "../nodes/Oura";
import { Node, type NodeProps } from "../../nodes/node";

export interface OuraProps extends NodeProps {
    readonly parameters: OuraNodeParameters;
    readonly ouraApiCredentials: Credentials<OuraApiCredentials>;
}

/**
 * Consume Oura API
 */
export class Oura<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.oura" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: OuraProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.ouraApiCredentials];
    }

}
