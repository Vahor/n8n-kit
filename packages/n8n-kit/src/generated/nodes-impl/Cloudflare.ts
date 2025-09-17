// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CloudflareApiCredentials } from "../credentials/CloudflareApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CloudflareNodeParameters } from "../nodes/Cloudflare";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface CloudflareProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: CloudflareNodeParameters;
    readonly cloudflareApiCredentials: Credentials<CloudflareApiCredentials>;
}

/**
 * Consume Cloudflare API
 */
export class Cloudflare<L extends string, C extends IContext = never, P extends CloudflareProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.cloudflare" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.cloudflareApiCredentials];
    }

}
