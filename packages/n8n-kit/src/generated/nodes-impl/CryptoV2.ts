// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CryptoCredentials } from "../credentials/Crypto.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CryptoV2NodeParameters } from "../nodes/CryptoV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CryptoV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CryptoV2NodeParameters;
    readonly cryptoCredentials?: Credentials<CryptoCredentials>;
}

/**
 * Provide cryptographic utilities
 */
export class CryptoV2<L extends string, C extends IContext = never, P extends CryptoV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.crypto" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.cryptoCredentials];
    }

}
