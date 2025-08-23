// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SentryIoOAuth2ApiCredentials } from "../credentials/SentryIoOAuth2Api.ts";
import type { SentryIoApiCredentials } from "../credentials/SentryIoApi.ts";
import type { SentryIoServerApiCredentials } from "../credentials/SentryIoServerApi.ts";
import type { Credentials } from "../../credentials";
import type { SentryIoNodeParameters } from "../nodes/SentryIo";
import { Node, type NodeProps } from "../../nodes";

export interface SentryIoProps extends NodeProps {

    readonly parameters: SentryIoNodeParameters;
    readonly sentryIoOAuth2ApiCredentials?: Credentials<SentryIoOAuth2ApiCredentials>;
    readonly sentryIoApiCredentials?: Credentials<SentryIoApiCredentials>;
    readonly sentryIoServerApiCredentials?: Credentials<SentryIoServerApiCredentials>;

}

export class SentryIo<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.sentryIo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: SentryIoProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.sentryIoOAuth2ApiCredentials, this.props!.sentryIoApiCredentials, this.props!.sentryIoServerApiCredentials];

    }


}
