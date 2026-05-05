// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { CryptoV1NodeParameters } from "../nodes/CryptoV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CryptoV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CryptoV1NodeParameters;
}

/**
 * Provide cryptographic utilities
 */
export class CryptoV1<L extends string, C extends IContext = never, P extends CryptoV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.crypto" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
