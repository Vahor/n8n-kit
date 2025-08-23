// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOutlookOAuth2ApiCredentials } from "../credentials/MicrosoftOutlookOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftOutlookV2NodeParameters } from "../nodes/MicrosoftOutlookV2";
import { Node, type NodeProps } from "../../nodes";

export interface MicrosoftOutlookV2Props extends NodeProps, MicrosoftOutlookV2NodeParameters {

    readonly microsoftOutlookOAuth2ApiCredentials: Credentials<MicrosoftOutlookOAuth2ApiCredentials>;

}

export class MicrosoftOutlookV2<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.microsoftOutlook" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, public readonly props: MicrosoftOutlookV2Props) {

        super(id, props);

    }

    override getParameters() : Omit<MicrosoftOutlookV2NodeParameters, "microsoftOutlookOAuth2ApiCredentials"> {

        const { microsoftOutlookOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.microsoftOutlookOAuth2ApiCredentials];

    }


}
