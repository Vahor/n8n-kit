// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { BitbucketApiCredentials } from "../credentials/BitbucketApi.ts";
import type { BitbucketAccessTokenApiCredentials } from "../credentials/BitbucketAccessTokenApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { BitbucketTriggerNodeParameters } from "../nodes/BitbucketTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface BitbucketTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: BitbucketTriggerNodeParameters;
    readonly bitbucketApiCredentials?: Credentials<BitbucketApiCredentials>;
    readonly bitbucketAccessTokenApiCredentials?: Credentials<BitbucketAccessTokenApiCredentials>;
}

/**
 * Handle Bitbucket events via webhooks
 */
export class BitbucketTrigger<L extends string, C extends IContext = never, P extends BitbucketTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.bitbucketTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.bitbucketApiCredentials, this.props?.bitbucketAccessTokenApiCredentials];
    }

}
