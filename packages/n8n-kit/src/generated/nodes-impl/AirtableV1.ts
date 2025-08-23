// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AirtableApiCredentials } from "../credentials/AirtableApi.ts";
import type { AirtableTokenApiCredentials } from "../credentials/AirtableTokenApi.ts";
import type { AirtableOAuth2ApiCredentials } from "../credentials/AirtableOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { AirtableV1NodeParameters } from "../nodes/AirtableV1";
import { Node, type NodeProps } from "../../nodes";

export interface AirtableV1Props extends NodeProps {

    readonly parameters: AirtableV1NodeParameters;
    readonly airtableApiCredentials?: Credentials<AirtableApiCredentials>;
    readonly airtableTokenApiCredentials?: Credentials<AirtableTokenApiCredentials>;
    readonly airtableOAuth2ApiCredentials?: Credentials<AirtableOAuth2ApiCredentials>;

}

export class AirtableV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.airtable" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: AirtableV1Props) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.airtableApiCredentials, this.props!.airtableTokenApiCredentials, this.props!.airtableOAuth2ApiCredentials];

    }


}
