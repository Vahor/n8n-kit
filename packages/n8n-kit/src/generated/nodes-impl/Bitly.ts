// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BitlyApiCredentials } from "../credentials/BitlyApi.ts";
import type { BitlyOAuth2ApiCredentials } from "../credentials/BitlyOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { BitlyNodeParameters } from "../nodes/Bitly";
import { Node, type NodeProps } from "../../nodes";

export interface BitlyProps extends NodeProps {

    readonly parameters: BitlyNodeParameters;
    readonly bitlyApiCredentials?: Credentials<BitlyApiCredentials>;
    readonly bitlyOAuth2ApiCredentials?: Credentials<BitlyOAuth2ApiCredentials>;

}

/**
 * Consume Bitly API
 */
export class Bitly<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.bitly" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: BitlyProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.bitlyApiCredentials, this.props!.bitlyOAuth2ApiCredentials];

    }


}
