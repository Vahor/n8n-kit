// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CryptoNodeParameters } from "../nodes/Crypto";
import { Node, type NodeProps } from "../../nodes";

export interface CryptoProps extends NodeProps, CryptoNodeParameters {


}

export class Crypto<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.crypto" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: CryptoProps) {

        super(id, props);

    }

    override getParameters() {

        return this.props ?? {};

    }


}

