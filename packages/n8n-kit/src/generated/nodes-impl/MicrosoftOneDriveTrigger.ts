// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOneDriveOAuth2ApiCredentials } from "../credentials/MicrosoftOneDriveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftOneDriveTriggerNodeParameters } from "../nodes/MicrosoftOneDriveTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface MicrosoftOneDriveTriggerProps extends NodeProps {
    readonly parameters: MicrosoftOneDriveTriggerNodeParameters;
    readonly microsoftOneDriveOAuth2ApiCredentials: Credentials<MicrosoftOneDriveOAuth2ApiCredentials>;
}

/**
 * Trigger for Microsoft OneDrive API.
 */
export class MicrosoftOneDriveTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.microsoftOneDriveTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MicrosoftOneDriveTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.microsoftOneDriveOAuth2ApiCredentials];
    }

}
