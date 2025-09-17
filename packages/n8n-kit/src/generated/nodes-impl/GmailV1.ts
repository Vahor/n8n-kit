// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GmailOAuth2ApiCredentials } from "../credentials/GmailOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GmailV1NodeParameters } from "../nodes/GmailV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GmailV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GmailV1NodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly gmailOAuth2Credentials?: Credentials<GmailOAuth2ApiCredentials>;
}

/**
 * Consume the Gmail API
 */
export class GmailV1<L extends string, C extends IContext = never, P extends GmailV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.gmail" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.googleApiCredentials, this.props?.gmailOAuth2Credentials];
    }

}
