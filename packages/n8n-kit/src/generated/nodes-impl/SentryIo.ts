// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SentryIoOAuth2ApiCredentials } from "../credentials/SentryIoOAuth2Api.ts";
import type { SentryIoApiCredentials } from "../credentials/SentryIoApi.ts";
import type { SentryIoServerApiCredentials } from "../credentials/SentryIoServerApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { SentryIoNodeParameters } from "../nodes/SentryIo";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface SentryIoProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: SentryIoNodeParameters;
    readonly sentryIoOAuth2ApiCredentials?: Credentials<SentryIoOAuth2ApiCredentials>;
    readonly sentryIoApiCredentials?: Credentials<SentryIoApiCredentials>;
    readonly sentryIoServerApiCredentials?: Credentials<SentryIoServerApiCredentials>;
}

/**
 * Consume Sentry.io API
 */
export class SentryIo<L extends string, C extends IContext = never, P extends SentryIoProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.sentryIo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.sentryIoOAuth2ApiCredentials, this.props?.sentryIoApiCredentials, this.props?.sentryIoServerApiCredentials];
    }

}
