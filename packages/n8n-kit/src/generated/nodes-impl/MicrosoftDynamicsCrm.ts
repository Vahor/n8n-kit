// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftDynamicsOAuth2ApiCredentials } from "../credentials/MicrosoftDynamicsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftDynamicsCrmNodeParameters } from "../nodes/MicrosoftDynamicsCrm";
import { Node, type NodeProps } from "../../nodes/node";

export interface MicrosoftDynamicsCrmProps extends NodeProps {
    readonly parameters: MicrosoftDynamicsCrmNodeParameters;
    readonly microsoftDynamicsOAuth2ApiCredentials: Credentials<MicrosoftDynamicsOAuth2ApiCredentials>;
}

/**
 * Consume Microsoft Dynamics CRM API
 */
export class MicrosoftDynamicsCrm<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.microsoftDynamicsCrm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MicrosoftDynamicsCrmProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.microsoftDynamicsOAuth2ApiCredentials];
    }

}
