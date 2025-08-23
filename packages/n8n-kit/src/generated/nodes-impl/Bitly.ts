// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BitlyApiCredentials } from "../credentials/BitlyApi.ts";
import type { BitlyOAuth2ApiCredentials } from "../credentials/BitlyOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { BitlyNodeParameters } from "../nodes/Bitly";
import { Node, type NodeProps } from "../../nodes";

export interface BitlyProps extends NodeProps, BitlyNodeParameters {

    readonly bitlyApiCredentials?: Credentials<BitlyApiCredentials>;
    readonly bitlyOAuth2ApiCredentials?: Credentials<BitlyOAuth2ApiCredentials>;

}

export class Bitly<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.bitly" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: BitlyProps) {

        super(id, props);

    }

    override getParameters() : Omit<BitlyNodeParameters, "bitlyApiCredentials | bitlyOAuth2ApiCredentials"> {

        const { bitlyApiCredentials:_0, bitlyOAuth2ApiCredentials:_1, ...rest } = this.props ?? {};
        return rest;

    }

    override getCredentials() {

        return [this.props?.bitlyApiCredentials, this.props?.bitlyOAuth2ApiCredentials];

    }


}
