// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { CoinGeckoNodeParameters } from "../nodes/CoinGecko";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CoinGeckoProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CoinGeckoNodeParameters;
}

/**
 * Consume CoinGecko API
 */
export class CoinGecko<L extends string, C extends IContext = never, P extends CoinGeckoProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.coinGecko" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
