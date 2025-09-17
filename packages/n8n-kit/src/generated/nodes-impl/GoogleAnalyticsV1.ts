// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleAnalyticsOAuth2ApiCredentials } from "../credentials/GoogleAnalyticsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleAnalyticsV1NodeParameters } from "../nodes/GoogleAnalyticsV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleAnalyticsV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleAnalyticsV1NodeParameters;
    readonly googleAnalyticsOAuth2Credentials: Credentials<GoogleAnalyticsOAuth2ApiCredentials>;
}

/**
 * Use the Google Analytics API
 */
export class GoogleAnalyticsV1<L extends string, C extends IContext = never, P extends GoogleAnalyticsV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleAnalytics" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.googleAnalyticsOAuth2Credentials];
    }

}
