// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BitwardenApiCredentials } from "../credentials/BitwardenApi.ts";
import type { Credentials } from "../../credentials";
import type { BitwardenNodeParameters } from "../nodes/Bitwarden";
import { Node, type NodeProps } from "../../nodes";

export interface BitwardenProps extends NodeProps, BitwardenNodeParameters {

    readonly bitwardenApiCredentials: Credentials<BitwardenApiCredentials>;

}

export class Bitwarden<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.bitwarden" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: BitwardenProps) {

        super(id, props);

    }

    override getParameters() : Omit<BitwardenNodeParameters, "bitwardenApiCredentials"> {

        const { bitwardenApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.bitwardenApiCredentials];

    }


}

