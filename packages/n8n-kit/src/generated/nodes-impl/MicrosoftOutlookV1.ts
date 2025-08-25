// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOutlookOAuth2ApiCredentials } from "../credentials/MicrosoftOutlookOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftOutlookV1NodeParameters } from "../nodes/MicrosoftOutlookV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface MicrosoftOutlookV1Props extends NodeProps {
    readonly parameters: MicrosoftOutlookV1NodeParameters;
    readonly microsoftOutlookOAuth2ApiCredentials: Credentials<MicrosoftOutlookOAuth2ApiCredentials>;
}

/**
 * Consume Microsoft Outlook API
 */
export class MicrosoftOutlookV1<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.microsoftOutlook" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MicrosoftOutlookV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.microsoftOutlookOAuth2ApiCredentials];
    }

}
