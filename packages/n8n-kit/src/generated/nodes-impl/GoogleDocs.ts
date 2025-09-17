// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleDocsOAuth2ApiCredentials } from "../credentials/GoogleDocsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleDocsNodeParameters } from "../nodes/GoogleDocs";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GoogleDocsProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GoogleDocsNodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleDocsOAuth2ApiCredentials?: Credentials<GoogleDocsOAuth2ApiCredentials>;
}

/**
 * Consume Google Docs API.
 */
export class GoogleDocs<L extends string, C extends IContext = never, P extends GoogleDocsProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.googleDocs" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.googleApiCredentials, this.props?.googleDocsOAuth2ApiCredentials];
    }

}
