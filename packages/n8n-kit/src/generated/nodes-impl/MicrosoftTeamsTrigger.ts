// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftTeamsOAuth2ApiCredentials } from "../credentials/MicrosoftTeamsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftTeamsTriggerNodeParameters } from "../nodes/MicrosoftTeamsTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface MicrosoftTeamsTriggerProps extends NodeProps {
    readonly parameters: MicrosoftTeamsTriggerNodeParameters;
    readonly microsoftTeamsOAuth2ApiCredentials: Credentials<MicrosoftTeamsOAuth2ApiCredentials>;
}

/**
 * Triggers workflows in n8n based on events from Microsoft Teams, such as new messages or team updates, using specified configurations.
 */
export class MicrosoftTeamsTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.microsoftTeamsTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MicrosoftTeamsTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.microsoftTeamsOAuth2ApiCredentials];
    }

}
