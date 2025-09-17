// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LinkedInOAuth2ApiCredentials } from "../credentials/LinkedInOAuth2Api.ts";
import type { LinkedInCommunityManagementOAuth2ApiCredentials } from "../credentials/LinkedInCommunityManagementOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { LinkedInNodeParameters } from "../nodes/LinkedIn";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LinkedInProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LinkedInNodeParameters;
    readonly linkedInOAuth2ApiCredentials?: Credentials<LinkedInOAuth2ApiCredentials>;
    readonly linkedInCommunityManagementOAuth2ApiCredentials?: Credentials<LinkedInCommunityManagementOAuth2ApiCredentials>;
}

/**
 * Consume LinkedIn API
 */
export class LinkedIn<L extends string, C extends IContext = never, P extends LinkedInProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.linkedIn" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.linkedInOAuth2ApiCredentials, this.props?.linkedInCommunityManagementOAuth2ApiCredentials];
    }

}
