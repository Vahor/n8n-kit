// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LinkedInOAuth2ApiCredentials } from "../credentials/LinkedInOAuth2Api.ts";
import type { LinkedInCommunityManagementOAuth2ApiCredentials } from "../credentials/LinkedInCommunityManagementOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { LinkedInNodeParameters } from "../nodes/LinkedIn";
import { Node, type NodeProps } from "../../nodes";

export interface LinkedInProps extends NodeProps, LinkedInNodeParameters {

    readonly linkedInOAuth2ApiCredentials?: Credentials<LinkedInOAuth2ApiCredentials>;
    readonly linkedInCommunityManagementOAuth2ApiCredentials?: Credentials<LinkedInCommunityManagementOAuth2ApiCredentials>;

}

export class LinkedIn<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.linkedIn" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: LinkedInProps) {

        super(id, props);

    }

    override getParameters() : Omit<LinkedInNodeParameters, "linkedInOAuth2ApiCredentials | linkedInCommunityManagementOAuth2ApiCredentials"> {

        const { linkedInOAuth2ApiCredentials:_0, linkedInCommunityManagementOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.linkedInOAuth2ApiCredentials, this.props.linkedInCommunityManagementOAuth2ApiCredentials];

    }


}
