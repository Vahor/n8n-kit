// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { UrlScanIoApiCredentials } from "../credentials/UrlScanIoApi.ts";
import type { Credentials } from "../../credentials";
import type { UrlScanIoNodeParameters } from "../nodes/UrlScanIo";
import { Node, type NodeProps } from "../../nodes";

export interface UrlScanIoProps extends NodeProps, UrlScanIoNodeParameters {

    readonly urlScanIoApiCredentials: Credentials<UrlScanIoApiCredentials>;

}

export class UrlScanIo<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.urlScanIo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: UrlScanIoProps) {

        super(id, props);

    }

    override getParameters() : Omit<UrlScanIoNodeParameters, "urlScanIoApiCredentials"> {

        const { urlScanIoApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.urlScanIoApiCredentials];

    }


}

