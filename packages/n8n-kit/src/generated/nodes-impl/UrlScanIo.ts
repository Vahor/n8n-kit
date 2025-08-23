// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { UrlScanIoApiCredentials } from "../credentials/UrlScanIoApi.ts";
import type { Credentials } from "../../credentials";
import type { UrlScanIoNodeParameters } from "../nodes/UrlScanIo";
import { Node, type NodeProps } from "../../nodes";

export interface UrlScanIoProps extends NodeProps {
    readonly parameters: UrlScanIoNodeParameters;
    readonly urlScanIoApiCredentials: Credentials<UrlScanIoApiCredentials>;
}

/**
 * Provides various utilities for monitoring websites like health checks or screenshots
 */
export class UrlScanIo<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.urlScanIo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: UrlScanIoProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.urlScanIoApiCredentials];
    }

}
