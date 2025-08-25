// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { UrlScanIoApiCredentials } from "../credentials/UrlScanIoApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { UrlScanIoNodeParameters } from "../nodes/UrlScanIo";
import { Node, type NodeProps } from "../../nodes/node";

export interface UrlScanIoProps extends NodeProps {
    readonly parameters: UrlScanIoNodeParameters;
    readonly urlScanIoApiCredentials: Credentials<UrlScanIoApiCredentials>;
}

/**
 * Provides various utilities for monitoring websites like health checks or screenshots
 */
export class UrlScanIo<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.urlScanIo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: UrlScanIoProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.urlScanIoApiCredentials];
    }

}
