// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AirtableApiCredentials } from "../credentials/AirtableApi.ts";
import type { AirtableTokenApiCredentials } from "../credentials/AirtableTokenApi.ts";
import type { AirtableOAuth2ApiCredentials } from "../credentials/AirtableOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { AirtableTriggerNodeParameters } from "../nodes/AirtableTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface AirtableTriggerProps extends NodeProps, AirtableTriggerNodeParameters {

    readonly airtableApiCredentials?: Credentials<AirtableApiCredentials>;
    readonly airtableTokenApiCredentials?: Credentials<AirtableTokenApiCredentials>;
    readonly airtableOAuth2ApiCredentials?: Credentials<AirtableOAuth2ApiCredentials>;

}

export class AirtableTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.airtableTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: AirtableTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<AirtableTriggerNodeParameters, "airtableApiCredentials | airtableTokenApiCredentials | airtableOAuth2ApiCredentials"> {

        const { airtableApiCredentials:_0, airtableTokenApiCredentials:_1, airtableOAuth2ApiCredentials:_2, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.airtableApiCredentials, this.props.airtableTokenApiCredentials, this.props.airtableOAuth2ApiCredentials];

    }


}

