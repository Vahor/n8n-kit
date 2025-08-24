// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { CryptoNodeParameters } from "../nodes/Crypto";
import { Node, type NodeProps } from "../../nodes/node";

export interface CryptoProps extends NodeProps {
    readonly parameters: CryptoNodeParameters;
}

/**
 * Provide cryptographic utilities
 */
export class Crypto<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.crypto" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: CryptoProps) {
        super(id, props);
    }

}
