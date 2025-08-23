// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GooglePerspectiveOAuth2ApiCredentials } from "../credentials/GooglePerspectiveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GooglePerspectiveNodeParameters } from "../nodes/GooglePerspective";
import { Node, type NodeProps } from "../../nodes";

export interface GooglePerspectiveProps extends NodeProps, GooglePerspectiveNodeParameters {

    readonly googlePerspectiveOAuth2ApiCredentials: Credentials<GooglePerspectiveOAuth2ApiCredentials>;

}

export class GooglePerspective<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googlePerspective" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: GooglePerspectiveProps) {

        super(id, props);

    }

    override getParameters() : Omit<GooglePerspectiveNodeParameters, "googlePerspectiveOAuth2ApiCredentials"> {

        const { googlePerspectiveOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googlePerspectiveOAuth2ApiCredentials];

    }


}

