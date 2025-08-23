// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOneDriveOAuth2ApiCredentials } from "../credentials/MicrosoftOneDriveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftOneDriveTriggerNodeParameters } from "../nodes/MicrosoftOneDriveTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface MicrosoftOneDriveTriggerProps extends NodeProps, MicrosoftOneDriveTriggerNodeParameters {

    readonly microsoftOneDriveOAuth2ApiCredentials: Credentials<MicrosoftOneDriveOAuth2ApiCredentials>;

}

export class MicrosoftOneDriveTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.microsoftOneDriveTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: MicrosoftOneDriveTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { microsoftOneDriveOAuth2ApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.microsoftOneDriveOAuth2ApiCredentials];

    }


}

