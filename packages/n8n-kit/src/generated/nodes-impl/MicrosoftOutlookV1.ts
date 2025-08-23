// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOutlookOAuth2ApiCredentials } from "../credentials/MicrosoftOutlookOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftOutlookV1NodeParameters } from "../nodes/MicrosoftOutlookV1";
import { Node, type NodeProps } from "../../nodes";

export interface MicrosoftOutlookV1Props extends NodeProps {

    readonly parameters: MicrosoftOutlookV1NodeParameters;
    readonly microsoftOutlookOAuth2ApiCredentials: Credentials<MicrosoftOutlookOAuth2ApiCredentials>;

}

export class MicrosoftOutlookV1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.microsoftOutlook" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MicrosoftOutlookV1Props) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.microsoftOutlookOAuth2ApiCredentials];

    }


}
