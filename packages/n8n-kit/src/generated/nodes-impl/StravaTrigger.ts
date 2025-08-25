// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StravaOAuth2ApiCredentials } from "../credentials/StravaOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { StravaTriggerNodeParameters } from "../nodes/StravaTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface StravaTriggerProps extends NodeProps {
    readonly parameters: StravaTriggerNodeParameters;
    readonly stravaOAuth2ApiCredentials: Credentials<StravaOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Strava events occur
 */
export class StravaTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.stravaTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: StravaTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.stravaOAuth2ApiCredentials];
    }

}
