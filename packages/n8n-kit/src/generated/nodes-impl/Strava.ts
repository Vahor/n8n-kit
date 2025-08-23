// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StravaOAuth2ApiCredentials } from "../credentials/StravaOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { StravaNodeParameters } from "../nodes/Strava";
import { Node, type NodeProps } from "../../nodes";

export interface StravaProps extends NodeProps, StravaNodeParameters {

    readonly stravaOAuth2ApiCredentials: Credentials<StravaOAuth2ApiCredentials>;

}

export class Strava<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.strava" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: StravaProps) {

        super(id, props);

    }

    override getParameters() {

        const { stravaOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.stravaOAuth2ApiCredentials];

    }


}

