// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftSharePointOAuth2ApiCredentials } from "../credentials/MicrosoftSharePointOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftSharePointNodeParameters } from "../nodes/MicrosoftSharePoint";
import { Node, type NodeProps } from "../../nodes";

export interface MicrosoftSharePointProps extends NodeProps, MicrosoftSharePointNodeParameters {

    readonly microsoftSharePointOAuth2ApiCredentials: Credentials<MicrosoftSharePointOAuth2ApiCredentials>;

}

export class MicrosoftSharePoint<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.microsoftSharePoint" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: MicrosoftSharePointProps) {

        super(id, props);

    }

    override getParameters() : Omit<MicrosoftSharePointNodeParameters, "microsoftSharePointOAuth2ApiCredentials"> {

        const { microsoftSharePointOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.microsoftSharePointOAuth2ApiCredentials];

    }


}
