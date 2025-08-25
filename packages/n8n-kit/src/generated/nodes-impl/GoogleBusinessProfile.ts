// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleBusinessProfileOAuth2ApiCredentials } from "../credentials/GoogleBusinessProfileOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleBusinessProfileNodeParameters } from "../nodes/GoogleBusinessProfile";
import { Node, type NodeProps } from "../../nodes/node";

export interface GoogleBusinessProfileProps extends NodeProps {
    readonly parameters: GoogleBusinessProfileNodeParameters;
    readonly googleBusinessProfileOAuth2ApiCredentials: Credentials<GoogleBusinessProfileOAuth2ApiCredentials>;
}

/**
 * Consume Google Business Profile API
 */
export class GoogleBusinessProfile<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.googleBusinessProfile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: GoogleBusinessProfileProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleBusinessProfileOAuth2ApiCredentials];
    }

}
