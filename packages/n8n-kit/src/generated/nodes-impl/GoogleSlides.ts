// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleSlidesOAuth2ApiCredentials } from "../credentials/GoogleSlidesOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleSlidesNodeParameters } from "../nodes/GoogleSlides";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleSlidesProps extends NodeProps, GoogleSlidesNodeParameters {

    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleSlidesOAuth2ApiCredentials?: Credentials<GoogleSlidesOAuth2ApiCredentials>;

}

export class GoogleSlides<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleSlides" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props?: GoogleSlidesProps) {

        super(id, props);

    }

    override getParameters() : Omit<GoogleSlidesNodeParameters, "googleApiCredentials | googleSlidesOAuth2ApiCredentials"> {

        const { googleApiCredentials:_0, googleSlidesOAuth2ApiCredentials:_1, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleApiCredentials, this.props.googleSlidesOAuth2ApiCredentials];

    }


}

