// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftTeamsOAuth2ApiCredentials } from "../credentials/MicrosoftTeamsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftTeamsV2NodeParameters } from "../nodes/MicrosoftTeamsV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface MicrosoftTeamsV2Props extends NodeProps {
    readonly parameters: MicrosoftTeamsV2NodeParameters;
    readonly microsoftTeamsOAuth2ApiCredentials: Credentials<MicrosoftTeamsOAuth2ApiCredentials>;
}

/**
 * Consume Microsoft Teams API
 */
export class MicrosoftTeamsV2<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.microsoftTeams" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: MicrosoftTeamsV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.microsoftTeamsOAuth2ApiCredentials];
    }

}
