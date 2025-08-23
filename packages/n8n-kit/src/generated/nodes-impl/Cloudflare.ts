// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CloudflareApiCredentials } from "../credentials/CloudflareApi.ts";
import type { Credentials } from "../../credentials";
import type { CloudflareNodeParameters } from "../nodes/Cloudflare";
import { Node, type NodeProps } from "../../nodes";

export interface CloudflareProps extends NodeProps, CloudflareNodeParameters {

    readonly cloudflareApiCredentials: Credentials<CloudflareApiCredentials>;

}

export class Cloudflare<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.cloudflare" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: CloudflareProps) {

        super(id, props);

    }

    override getParameters() {

        const { cloudflareApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.cloudflareApiCredentials];

    }


}

