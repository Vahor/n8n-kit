// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HelpScoutOAuth2ApiCredentials } from "../credentials/HelpScoutOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { HelpScoutTriggerNodeParameters } from "../nodes/HelpScoutTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface HelpScoutTriggerProps extends NodeProps {
    readonly parameters: HelpScoutTriggerNodeParameters;
    readonly helpScoutOAuth2ApiCredentials: Credentials<HelpScoutOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Help Scout events occur
 */
export class HelpScoutTrigger<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.helpScoutTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: HelpScoutTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.helpScoutOAuth2ApiCredentials];
    }

}
