// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleAnalyticsOAuth2ApiCredentials } from "../credentials/GoogleAnalyticsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleAnalyticsV2NodeParameters } from "../nodes/GoogleAnalyticsV2";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleAnalyticsV2Props extends NodeProps {
    readonly parameters: GoogleAnalyticsV2NodeParameters;
    readonly googleAnalyticsOAuth2Credentials: Credentials<GoogleAnalyticsOAuth2ApiCredentials>;
}

/**
 * Use the Google Analytics API
 */
export class GoogleAnalyticsV2<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.googleAnalytics" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: GoogleAnalyticsV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleAnalyticsOAuth2Credentials];
    }

}
