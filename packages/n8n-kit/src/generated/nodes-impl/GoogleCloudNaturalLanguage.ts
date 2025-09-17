// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleCloudNaturalLanguageOAuth2ApiCredentials } from "../credentials/GoogleCloudNaturalLanguageOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleCloudNaturalLanguageNodeParameters } from "../nodes/GoogleCloudNaturalLanguage";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleCloudNaturalLanguageProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleCloudNaturalLanguageNodeParameters;
    readonly googleCloudNaturalLanguageOAuth2ApiCredentials: Credentials<GoogleCloudNaturalLanguageOAuth2ApiCredentials>;
}

/**
 * Consume Google Cloud Natural Language API
 */
export class GoogleCloudNaturalLanguage<L extends string, C extends IContext = never, P extends GoogleCloudNaturalLanguageProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleCloudNaturalLanguage" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.googleCloudNaturalLanguageOAuth2ApiCredentials];
    }

}
