// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CoinGeckoNodeParameters } from "../nodes/CoinGecko";
import { Node, type NodeProps } from "../../nodes";

export interface CoinGeckoProps extends NodeProps, CoinGeckoNodeParameters {


}

export class CoinGecko<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.coinGecko" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: CoinGeckoProps) {

        super(id, props);

    }

    override getParameters() : CoinGeckoNodeParameters {

        return this.props ?? {};

    }


}

