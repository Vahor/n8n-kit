// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleAdsOAuth2ApiCredentials } from "../credentials/GoogleAdsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleAdsNodeParameters } from "../nodes/GoogleAds";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleAdsProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleAdsNodeParameters;
    readonly googleAdsOAuth2ApiCredentials: Credentials<GoogleAdsOAuth2ApiCredentials>;
}

/**
 * Use the Google Ads API
 */
export class GoogleAds<L extends string, C extends IContext = never, P extends GoogleAdsProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleAds" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.googleAdsOAuth2ApiCredentials];
    }

}
