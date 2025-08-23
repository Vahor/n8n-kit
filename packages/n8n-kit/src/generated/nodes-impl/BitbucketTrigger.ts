// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BitbucketApiCredentials } from "../credentials/BitbucketApi.ts";
import type { Credentials } from "../../credentials";
import type { BitbucketTriggerNodeParameters } from "../nodes/BitbucketTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface BitbucketTriggerProps extends NodeProps, BitbucketTriggerNodeParameters {

    readonly bitbucketApiCredentials: Credentials<BitbucketApiCredentials>;

}

export class BitbucketTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.bitbucketTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: BitbucketTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { bitbucketApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.bitbucketApiCredentials];

    }


}

