// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OuraApiCredentials } from "../credentials/OuraApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { OuraNodeParameters } from "../nodes/Oura";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface OuraProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: OuraNodeParameters;
    readonly ouraApiCredentials: Credentials<OuraApiCredentials>;
}

/**
 * Consume Oura API
 */
export class Oura<L extends string, C extends IContext = never, P extends OuraProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.oura" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.ouraApiCredentials];
    }

}
