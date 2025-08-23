// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NextCloudApiCredentials } from "../credentials/NextCloudApi.ts";
import type { NextCloudOAuth2ApiCredentials } from "../credentials/NextCloudOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { NextCloudNodeParameters } from "../nodes/NextCloud";
import { Node, type NodeProps } from "../../nodes";

export interface NextCloudProps extends NodeProps, NextCloudNodeParameters {

    readonly nextCloudApiCredentials?: Credentials<NextCloudApiCredentials>;
    readonly nextCloudOAuth2ApiCredentials?: Credentials<NextCloudOAuth2ApiCredentials>;

}

export class NextCloud<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.nextCloud" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: NextCloudProps) {

        super(id, props);

    }

    override getParameters() : Omit<NextCloudNodeParameters, "nextCloudApiCredentials | nextCloudOAuth2ApiCredentials"> {

        const { nextCloudApiCredentials:_0, nextCloudOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.nextCloudApiCredentials, this.props.nextCloudOAuth2ApiCredentials];

    }


}

