// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LinkedInOAuth2ApiCredentials } from "../credentials/LinkedInOAuth2Api.ts";
import type { LinkedInCommunityManagementOAuth2ApiCredentials } from "../credentials/LinkedInCommunityManagementOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { LinkedInNodeParameters } from "../nodes/LinkedIn";
import { Node, type NodeProps } from "../../nodes/node";

export interface LinkedInProps extends NodeProps {
    readonly parameters: LinkedInNodeParameters;
    readonly linkedInOAuth2ApiCredentials?: Credentials<LinkedInOAuth2ApiCredentials>;
    readonly linkedInCommunityManagementOAuth2ApiCredentials?: Credentials<LinkedInCommunityManagementOAuth2ApiCredentials>;
}

/**
 * Consume LinkedIn API
 */
export class LinkedIn<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.linkedIn" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: LinkedInProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.linkedInOAuth2ApiCredentials, this.props!.linkedInCommunityManagementOAuth2ApiCredentials];
    }

}
