// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GmailOAuth2ApiCredentials } from "../credentials/GmailOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GmailTriggerNodeParameters } from "../nodes/GmailTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GmailTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GmailTriggerNodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly gmailOAuth2Credentials?: Credentials<GmailOAuth2ApiCredentials>;
}

/**
 * Fetches emails from Gmail and starts the workflow on specified polling intervals.
 */
export class GmailTrigger<L extends string, C extends IContext = never, P extends GmailTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.gmailTrigger" as const;
    protected typeVersion = 1.3 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.googleApiCredentials, this.props?.gmailOAuth2Credentials];
    }

}
