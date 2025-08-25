// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftSharePointOAuth2ApiCredentials } from "../credentials/MicrosoftSharePointOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftSharePointNodeParameters } from "../nodes/MicrosoftSharePoint";
import { Node, type NodeProps } from "../../nodes/node";

export interface MicrosoftSharePointProps extends NodeProps {
    readonly parameters: MicrosoftSharePointNodeParameters;
    readonly microsoftSharePointOAuth2ApiCredentials: Credentials<MicrosoftSharePointOAuth2ApiCredentials>;
}

/**
 * Interact with Microsoft SharePoint API
 */
export class MicrosoftSharePoint<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.microsoftSharePoint" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MicrosoftSharePointProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.microsoftSharePointOAuth2ApiCredentials];
    }

}
