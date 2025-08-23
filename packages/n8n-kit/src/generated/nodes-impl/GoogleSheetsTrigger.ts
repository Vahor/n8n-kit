// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleSheetsTriggerOAuth2ApiCredentials } from "../credentials/GoogleSheetsTriggerOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleSheetsTriggerNodeParameters } from "../nodes/GoogleSheetsTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleSheetsTriggerProps extends NodeProps {
    readonly parameters: GoogleSheetsTriggerNodeParameters;
    readonly googleSheetsTriggerOAuth2ApiCredentials?: Credentials<GoogleSheetsTriggerOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Google Sheets events occur
 */
export class GoogleSheetsTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.googleSheetsTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: GoogleSheetsTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleSheetsTriggerOAuth2ApiCredentials];
    }

}
