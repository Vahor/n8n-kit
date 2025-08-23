// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BitwardenApiCredentials } from "../credentials/BitwardenApi.ts";
import type { Credentials } from "../../credentials";
import type { BitwardenNodeParameters } from "../nodes/Bitwarden";
import { Node, type NodeProps } from "../../nodes";

export interface BitwardenProps extends NodeProps {

    readonly parameters: BitwardenNodeParameters;
    readonly bitwardenApiCredentials: Credentials<BitwardenApiCredentials>;

}

export class Bitwarden<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.bitwarden" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: BitwardenProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.bitwardenApiCredentials];

    }


}
