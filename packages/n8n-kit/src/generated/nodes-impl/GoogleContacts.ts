// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GoogleContactsOAuth2ApiCredentials } from "../credentials/GoogleContactsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { GoogleContactsNodeParameters } from "../nodes/GoogleContacts";
import { Node, type NodeProps } from "../../nodes";

export interface GoogleContactsProps extends NodeProps, GoogleContactsNodeParameters {

    readonly googleContactsOAuth2ApiCredentials: Credentials<GoogleContactsOAuth2ApiCredentials>;

}

export class GoogleContacts<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.googleContacts" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: GoogleContactsProps) {

        super(id, props);

    }

    override getParameters() : Omit<GoogleContactsNodeParameters, "googleContactsOAuth2ApiCredentials"> {

        const { googleContactsOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.googleContactsOAuth2ApiCredentials];

    }


}
