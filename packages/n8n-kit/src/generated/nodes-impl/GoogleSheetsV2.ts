// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleSheetsOAuth2ApiCredentials } from "../credentials/GoogleSheetsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GoogleSheetsV2NodeParameters } from "../nodes/GoogleSheetsV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface GoogleSheetsV2Props extends NodeProps {
    readonly parameters: GoogleSheetsV2NodeParameters;
    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleSheetsOAuth2ApiCredentials?: Credentials<GoogleSheetsOAuth2ApiCredentials>;
}

/**
 * Read, update and write data to Google Sheets
 */
export class GoogleSheetsV2<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.googleSheets" as const;
    protected typeVersion = 4.7 as const;

    constructor(id: L, override props?: GoogleSheetsV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.googleApiCredentials, this.props!.googleSheetsOAuth2ApiCredentials];
    }

}
