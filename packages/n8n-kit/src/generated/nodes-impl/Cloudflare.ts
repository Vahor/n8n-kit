// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CloudflareApiCredentials } from "../credentials/CloudflareApi.ts";
import type { Credentials } from "../../credentials";
import type { CloudflareNodeParameters } from "../nodes/Cloudflare";
import { Node, type NodeProps } from "../../nodes/node";

export interface CloudflareProps extends NodeProps {
    readonly parameters: CloudflareNodeParameters;
    readonly cloudflareApiCredentials: Credentials<CloudflareApiCredentials>;
}

/**
 * Consume Cloudflare API
 */
export class Cloudflare<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.cloudflare" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: CloudflareProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.cloudflareApiCredentials];
    }

}
