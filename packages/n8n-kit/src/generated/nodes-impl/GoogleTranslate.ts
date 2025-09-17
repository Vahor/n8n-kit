// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleTranslateOAuth2ApiCredentials } from "../credentials/GoogleTranslateOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleTranslateNodeParameters } from "../nodes/GoogleTranslate";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleTranslateProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleTranslateNodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleTranslateOAuth2ApiCredentials?: Credentials<GoogleTranslateOAuth2ApiCredentials>;
}

/**
 * Translate data using Google Translate
 */
export class GoogleTranslate<L extends string, C extends IContext = never, P extends GoogleTranslateProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleTranslate" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.googleApiCredentials, this.props?.googleTranslateOAuth2ApiCredentials];
    }

}
