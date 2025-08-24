// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BitbucketApiCredentials } from "../credentials/BitbucketApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { BitbucketTriggerNodeParameters } from "../nodes/BitbucketTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface BitbucketTriggerProps extends NodeProps {
    readonly parameters: BitbucketTriggerNodeParameters;
    readonly bitbucketApiCredentials: Credentials<BitbucketApiCredentials>;
}

/**
 * Handle Bitbucket events via webhooks
 */
export class BitbucketTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.bitbucketTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: BitbucketTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.bitbucketApiCredentials];
    }

}
