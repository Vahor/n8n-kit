// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftDynamicsOAuth2ApiCredentials } from "../credentials/MicrosoftDynamicsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftDynamicsCrmNodeParameters } from "../nodes/MicrosoftDynamicsCrm";
import { Node, type NodeProps } from "../../nodes";

export interface MicrosoftDynamicsCrmProps extends NodeProps, MicrosoftDynamicsCrmNodeParameters {

    readonly microsoftDynamicsOAuth2ApiCredentials: Credentials<MicrosoftDynamicsOAuth2ApiCredentials>;

}

export class MicrosoftDynamicsCrm<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.microsoftDynamicsCrm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: MicrosoftDynamicsCrmProps) {

        super(id, props);

    }

    override getParameters() : Omit<MicrosoftDynamicsCrmNodeParameters, "microsoftDynamicsOAuth2ApiCredentials"> {

        const { microsoftDynamicsOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.microsoftDynamicsOAuth2ApiCredentials];

    }


}
