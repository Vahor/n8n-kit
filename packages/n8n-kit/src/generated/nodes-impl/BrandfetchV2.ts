// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BrandfetchApiCredentials } from "../credentials/BrandfetchApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { BrandfetchV2NodeParameters } from "../nodes/BrandfetchV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface BrandfetchV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: BrandfetchV2NodeParameters;
    readonly brandfetchApiCredentials: Credentials<BrandfetchApiCredentials>;
}

/**
 * Consume Brandfetch API
 */
export class BrandfetchV2<L extends string, C extends IContext = never, P extends BrandfetchV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.Brandfetch" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.brandfetchApiCredentials];
    }

}
