// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOutlookOAuth2ApiCredentials } from "../credentials/MicrosoftOutlookOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftOutlookTriggerNodeParameters } from "../nodes/MicrosoftOutlookTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface MicrosoftOutlookTriggerProps extends NodeProps, MicrosoftOutlookTriggerNodeParameters {

    readonly microsoftOutlookOAuth2ApiCredentials: Credentials<MicrosoftOutlookOAuth2ApiCredentials>;

}

export class MicrosoftOutlookTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.microsoftOutlookTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: MicrosoftOutlookTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { microsoftOutlookOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.microsoftOutlookOAuth2ApiCredentials];

    }


}

