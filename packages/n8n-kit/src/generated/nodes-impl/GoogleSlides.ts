// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleSlidesOAuth2ApiCredentials } from "../credentials/GoogleSlidesOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleSlidesNodeParameters } from "../nodes/GoogleSlides";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleSlidesProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleSlidesNodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleSlidesOAuth2ApiCredentials?: Credentials<GoogleSlidesOAuth2ApiCredentials>;
}

/**
 * Consume the Google Slides API
 */
export class GoogleSlides<L extends string, C extends IContext = never, P extends GoogleSlidesProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleSlides" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.googleApiCredentials, this.props?.googleSlidesOAuth2ApiCredentials];
    }

}
