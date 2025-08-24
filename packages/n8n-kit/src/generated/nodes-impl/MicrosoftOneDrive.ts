// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOneDriveOAuth2ApiCredentials } from "../credentials/MicrosoftOneDriveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftOneDriveNodeParameters } from "../nodes/MicrosoftOneDrive";
import { Node, type NodeProps } from "../../nodes/node";

export interface MicrosoftOneDriveProps extends NodeProps {
    readonly parameters: MicrosoftOneDriveNodeParameters;
    readonly microsoftOneDriveOAuth2ApiCredentials: Credentials<MicrosoftOneDriveOAuth2ApiCredentials>;
}

/**
 * Consume Microsoft OneDrive API
 */
export class MicrosoftOneDrive<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.microsoftOneDrive" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MicrosoftOneDriveProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.microsoftOneDriveOAuth2ApiCredentials];
    }

}
