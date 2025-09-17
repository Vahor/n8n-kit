// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftTeamsOAuth2ApiCredentials } from "../credentials/MicrosoftTeamsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftTeamsTriggerNodeParameters } from "../nodes/MicrosoftTeamsTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MicrosoftTeamsTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MicrosoftTeamsTriggerNodeParameters;
    readonly microsoftTeamsOAuth2ApiCredentials: Credentials<MicrosoftTeamsOAuth2ApiCredentials>;
}

/**
 * Triggers workflows in n8n based on events from Microsoft Teams, such as new messages or team updates, using specified configurations.
 */
export class MicrosoftTeamsTrigger<L extends string, C extends IContext = never, P extends MicrosoftTeamsTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.microsoftTeamsTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.microsoftTeamsOAuth2ApiCredentials];
    }

}
