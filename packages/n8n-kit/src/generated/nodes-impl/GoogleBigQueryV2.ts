// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleBigQueryOAuth2ApiCredentials } from "../credentials/GoogleBigQueryOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleBigQueryV2NodeParameters } from "../nodes/GoogleBigQueryV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface GoogleBigQueryV2Props extends NodeProps {
    readonly parameters: GoogleBigQueryV2NodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleBigQueryOAuth2ApiCredentials?: Credentials<GoogleBigQueryOAuth2ApiCredentials>;
}

/**
 * Consume Google BigQuery API
 */
export class GoogleBigQueryV2<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.googleBigQuery" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, override props?: GoogleBigQueryV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleApiCredentials, this.props!.googleBigQueryOAuth2ApiCredentials];
    }

}
