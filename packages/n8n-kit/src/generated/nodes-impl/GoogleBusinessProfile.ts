// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleBusinessProfileOAuth2ApiCredentials } from "../credentials/GoogleBusinessProfileOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleBusinessProfileNodeParameters } from "../nodes/GoogleBusinessProfile";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleBusinessProfileProps extends NodeProps {

    readonly parameters: GoogleBusinessProfileNodeParameters;
    readonly googleBusinessProfileOAuth2ApiCredentials: Credentials<GoogleBusinessProfileOAuth2ApiCredentials>;

}

export class GoogleBusinessProfile<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleBusinessProfile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: GoogleBusinessProfileProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.googleBusinessProfileOAuth2ApiCredentials];

    }


}
