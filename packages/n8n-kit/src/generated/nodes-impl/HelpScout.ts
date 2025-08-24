// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HelpScoutOAuth2ApiCredentials } from "../credentials/HelpScoutOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { HelpScoutNodeParameters } from "../nodes/HelpScout";
import { Node, type NodeProps } from "../../nodes/node";

export interface HelpScoutProps extends NodeProps {
    readonly parameters: HelpScoutNodeParameters;
    readonly helpScoutOAuth2ApiCredentials: Credentials<HelpScoutOAuth2ApiCredentials>;
}

/**
 * Consume Help Scout API
 */
export class HelpScout<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.helpScout" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: HelpScoutProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.helpScoutOAuth2ApiCredentials];
    }

}
