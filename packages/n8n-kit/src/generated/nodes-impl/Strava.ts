// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StravaOAuth2ApiCredentials } from "../credentials/StravaOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { StravaNodeParameters } from "../nodes/Strava";
import { Node, type NodeProps } from "../../nodes/node";

export interface StravaProps extends NodeProps {
    readonly parameters: StravaNodeParameters;
    readonly stravaOAuth2ApiCredentials: Credentials<StravaOAuth2ApiCredentials>;
}

/**
 * Consume Strava API
 */
export class Strava<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.strava" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: StravaProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.stravaOAuth2ApiCredentials];
    }

}
