// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AirtableTokenApiCredentials } from "../credentials/AirtableTokenApi.ts";
import type { AirtableOAuth2ApiCredentials } from "../credentials/AirtableOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { AirtableV2NodeParameters } from "../nodes/AirtableV2";
import { Node, type NodeProps } from "../../nodes";

export interface AirtableV2Props extends NodeProps, AirtableV2NodeParameters {

    readonly airtableTokenApiCredentials?: Credentials<AirtableTokenApiCredentials>;
    readonly airtableOAuth2ApiCredentials?: Credentials<AirtableOAuth2ApiCredentials>;

}

export class AirtableV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.airtable" as const;
    protected typeVersion = 2.1 as const;

    constructor(id: L, public readonly props?: AirtableV2Props) {

        super(id, props);

    }

    override getParameters() : Omit<AirtableV2NodeParameters, "airtableTokenApiCredentials | airtableOAuth2ApiCredentials"> {

        const { airtableTokenApiCredentials:_0, airtableOAuth2ApiCredentials:_1, ...rest } = this.props ?? {};
        return rest;

    }

    override getCredentials() {

        return [this.props?.airtableTokenApiCredentials, this.props?.airtableOAuth2ApiCredentials];

    }


}
