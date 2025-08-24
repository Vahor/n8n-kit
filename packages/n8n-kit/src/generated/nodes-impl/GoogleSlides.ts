// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleSlidesOAuth2ApiCredentials } from "../credentials/GoogleSlidesOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleSlidesNodeParameters } from "../nodes/GoogleSlides";
import { Node, type NodeProps } from "../../nodes/node";

export interface GoogleSlidesProps extends NodeProps {
    readonly parameters: GoogleSlidesNodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleSlidesOAuth2ApiCredentials?: Credentials<GoogleSlidesOAuth2ApiCredentials>;
}

/**
 * Consume the Google Slides API
 */
export class GoogleSlides<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.googleSlides" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: GoogleSlidesProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleApiCredentials, this.props!.googleSlidesOAuth2ApiCredentials];
    }

}
