// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleAnalyticsOAuth2Credentials } from "../credentials/GoogleAnalyticsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleAnalyticsV1NodeParameters } from "../nodes/GoogleAnalyticsV1";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleAnalyticsV1Props extends NodeProps, GoogleAnalyticsV1NodeParameters {

    readonly googleAnalyticsOAuth2Credentials: Credentials<GoogleAnalyticsOAuth2Credentials>;

}

export class GoogleAnalyticsV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleAnalytics" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: GoogleAnalyticsV1Props) {

        super(id, props);

    }

    override getParameters() {

        const { googleAnalyticsOAuth2Credentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleAnalyticsOAuth2Credentials];

    }


}

