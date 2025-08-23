// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftEntraOAuth2ApiCredentials } from "../credentials/MicrosoftEntraOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftEntraNodeParameters } from "../nodes/MicrosoftEntra";
import { Node, type NodeProps } from "../../nodes";

export interface MicrosoftEntraProps extends NodeProps, MicrosoftEntraNodeParameters {

    readonly microsoftEntraOAuth2ApiCredentials: Credentials<MicrosoftEntraOAuth2ApiCredentials>;

}

export class MicrosoftEntra<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.microsoftEntra" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: MicrosoftEntraProps) {

        super(id, props);

    }

    override getParameters() : Omit<MicrosoftEntraNodeParameters, "microsoftEntraOAuth2ApiCredentials"> {

        const { microsoftEntraOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.microsoftEntraOAuth2ApiCredentials];

    }


}

