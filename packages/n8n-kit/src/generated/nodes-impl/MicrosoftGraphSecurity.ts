// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftGraphSecurityOAuth2ApiCredentials } from "../credentials/MicrosoftGraphSecurityOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftGraphSecurityNodeParameters } from "../nodes/MicrosoftGraphSecurity";
import { Node, type NodeProps } from "../../nodes";

export interface MicrosoftGraphSecurityProps extends NodeProps, MicrosoftGraphSecurityNodeParameters {

    readonly microsoftGraphSecurityOAuth2ApiCredentials: Credentials<MicrosoftGraphSecurityOAuth2ApiCredentials>;

}

export class MicrosoftGraphSecurity<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.microsoftGraphSecurity" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: MicrosoftGraphSecurityProps) {

        super(id, props);

    }

    override getParameters() : Omit<MicrosoftGraphSecurityNodeParameters, "microsoftGraphSecurityOAuth2ApiCredentials"> {

        const { microsoftGraphSecurityOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.microsoftGraphSecurityOAuth2ApiCredentials];

    }


}
