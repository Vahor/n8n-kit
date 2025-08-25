// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftEntraOAuth2ApiCredentials } from "../credentials/MicrosoftEntraOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftEntraNodeParameters } from "../nodes/MicrosoftEntra";
import { Node, type NodeProps } from "../../nodes/node";

export interface MicrosoftEntraProps extends NodeProps {
    readonly parameters: MicrosoftEntraNodeParameters;
    readonly microsoftEntraOAuth2ApiCredentials: Credentials<MicrosoftEntraOAuth2ApiCredentials>;
}

/**
 * Interact with Microsoft Entra ID API
 */
export class MicrosoftEntra<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.microsoftEntra" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MicrosoftEntraProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.microsoftEntraOAuth2ApiCredentials];
    }

}
