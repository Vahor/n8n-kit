// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleBusinessProfileOAuth2ApiCredentials } from "../credentials/GoogleBusinessProfileOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleBusinessProfileTriggerNodeParameters } from "../nodes/GoogleBusinessProfileTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface GoogleBusinessProfileTriggerProps extends NodeProps {
    readonly parameters: GoogleBusinessProfileTriggerNodeParameters;
    readonly googleBusinessProfileOAuth2ApiCredentials: Credentials<GoogleBusinessProfileOAuth2ApiCredentials>;
}

/**
 * Fetches reviews from Google Business Profile and starts the workflow on specified polling intervals.
 */
export class GoogleBusinessProfileTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.googleBusinessProfileTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: GoogleBusinessProfileTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleBusinessProfileOAuth2ApiCredentials];
    }

}
