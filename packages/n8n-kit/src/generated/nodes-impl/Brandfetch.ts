// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BrandfetchApiCredentials } from "../credentials/BrandfetchApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { BrandfetchNodeParameters } from "../nodes/Brandfetch";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface BrandfetchProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: BrandfetchNodeParameters;
    readonly brandfetchApiCredentials: Credentials<BrandfetchApiCredentials>;
}

/**
 * Consume Brandfetch API
 */
export class Brandfetch<L extends string, C extends IContext = never, P extends BrandfetchProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.Brandfetch" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.brandfetchApiCredentials];
    }

}
