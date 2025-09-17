// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleBigQueryOAuth2ApiCredentials } from "../credentials/GoogleBigQueryOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleBigQueryV2NodeParameters } from "../nodes/GoogleBigQueryV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleBigQueryV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleBigQueryV2NodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleBigQueryOAuth2ApiCredentials?: Credentials<GoogleBigQueryOAuth2ApiCredentials>;
}

/**
 * Consume Google BigQuery API
 */
export class GoogleBigQueryV2<L extends string, C extends IContext = never, P extends GoogleBigQueryV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleBigQuery" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.googleApiCredentials, this.props?.googleBigQueryOAuth2ApiCredentials];
    }

}
