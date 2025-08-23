// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOutlookOAuth2ApiCredentials } from "../credentials/MicrosoftOutlookOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftOutlookV2NodeParameters } from "../nodes/MicrosoftOutlookV2";
import { Node, type NodeProps } from "../../nodes";

export interface MicrosoftOutlookV2Props extends NodeProps {
    readonly parameters: MicrosoftOutlookV2NodeParameters;
    readonly microsoftOutlookOAuth2ApiCredentials: Credentials<MicrosoftOutlookOAuth2ApiCredentials>;
}

/**
 * Consume Microsoft Outlook API
 */
export class MicrosoftOutlookV2<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.microsoftOutlook" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: MicrosoftOutlookV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.microsoftOutlookOAuth2ApiCredentials];
    }

}
