// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleApiCredentials } from "../credentials/GoogleApi.ts";
import type { GoogleSheetsOAuth2ApiCredentials } from "../credentials/GoogleSheetsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleSheetsV2NodeParameters } from "../nodes/GoogleSheetsV2";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleSheetsV2Props extends NodeProps, GoogleSheetsV2NodeParameters {

    readonly googleApiCredentials?: Credentials<GoogleApiCredentials>;
    readonly googleSheetsOAuth2ApiCredentials?: Credentials<GoogleSheetsOAuth2ApiCredentials>;

}

export class GoogleSheetsV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleSheets" as const;
    protected typeVersion = 4.7 as const;

    constructor(id: L, public readonly props?: GoogleSheetsV2Props) {

        super(id, props);

    }

    override getParameters() : Omit<GoogleSheetsV2NodeParameters, "googleApiCredentials | googleSheetsOAuth2ApiCredentials"> {

        const { googleApiCredentials:_0, googleSheetsOAuth2ApiCredentials:_1, ...rest } = this.props ?? {};
        return rest;

    }

    override getCredentials() {

        return [this.props?.googleApiCredentials, this.props?.googleSheetsOAuth2ApiCredentials];

    }


}
