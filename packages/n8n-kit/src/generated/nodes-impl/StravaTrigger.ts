// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StravaOAuth2ApiCredentials } from "../credentials/StravaOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { StravaTriggerNodeParameters } from "../nodes/StravaTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface StravaTriggerProps extends NodeProps, StravaTriggerNodeParameters {

    readonly stravaOAuth2ApiCredentials: Credentials<StravaOAuth2ApiCredentials>;

}

export class StravaTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.stravaTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: StravaTriggerProps) {

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

