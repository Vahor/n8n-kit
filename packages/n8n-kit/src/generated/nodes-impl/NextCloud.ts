// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NextCloudApiCredentials } from "../credentials/NextCloudApi.ts";
import type { NextCloudOAuth2ApiCredentials } from "../credentials/NextCloudOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { NextCloudNodeParameters } from "../nodes/NextCloud";
import { Node, type NodeProps } from "../../nodes/node";

export interface NextCloudProps extends NodeProps {
    readonly parameters: NextCloudNodeParameters;
    readonly nextCloudApiCredentials?: Credentials<NextCloudApiCredentials>;
    readonly nextCloudOAuth2ApiCredentials?: Credentials<NextCloudOAuth2ApiCredentials>;
}

/**
 * Access data on Nextcloud
 */
export class NextCloud<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.nextCloud" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: NextCloudProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.nextCloudApiCredentials, this.props!.nextCloudOAuth2ApiCredentials];
    }

}
