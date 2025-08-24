// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { CoinGeckoNodeParameters } from "../nodes/CoinGecko";
import { Node, type NodeProps } from "../../nodes/node";

export interface CoinGeckoProps extends NodeProps {
    readonly parameters: CoinGeckoNodeParameters;
}

/**
 * Consume CoinGecko API
 */
export class CoinGecko<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.coinGecko" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: CoinGeckoProps) {
        super(id, props);
    }

}
