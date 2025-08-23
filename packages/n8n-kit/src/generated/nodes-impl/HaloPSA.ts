// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HaloPSAApiCredentials } from "../credentials/HaloPSAApi.ts";
import type { Credentials } from "../../credentials";
import type { HaloPSANodeParameters } from "../nodes/HaloPSA";
import { Node, type NodeProps } from "../../nodes";

export interface HaloPSAProps extends NodeProps, HaloPSANodeParameters {

    readonly haloPsaApiCredentials: Credentials<HaloPSAApiCredentials>;

}

export class HaloPSA<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.haloPSA" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: HaloPSAProps) {

        super(id, props);

    }

    override getParameters() {

        const { haloPsaApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.haloPsaApiCredentials];

    }


}

