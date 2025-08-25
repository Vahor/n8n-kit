// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GooglePerspectiveOAuth2ApiCredentials } from "../credentials/GooglePerspectiveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GooglePerspectiveNodeParameters } from "../nodes/GooglePerspective";
import { Node, type NodeProps } from "../../nodes/node";

export interface GooglePerspectiveProps extends NodeProps {
    readonly parameters: GooglePerspectiveNodeParameters;
    readonly googlePerspectiveOAuth2ApiCredentials: Credentials<GooglePerspectiveOAuth2ApiCredentials>;
}

/**
 * Consume Google Perspective API
 */
export class GooglePerspective<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.googlePerspective" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: GooglePerspectiveProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googlePerspectiveOAuth2ApiCredentials];
    }

}
