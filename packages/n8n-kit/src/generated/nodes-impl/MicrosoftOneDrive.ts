// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOneDriveOAuth2ApiCredentials } from "../credentials/MicrosoftOneDriveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { MicrosoftOneDriveNodeParameters } from "../nodes/MicrosoftOneDrive";
import { Node, type NodeProps } from "../../nodes";

export interface MicrosoftOneDriveProps extends NodeProps, MicrosoftOneDriveNodeParameters {

    readonly microsoftOneDriveOAuth2ApiCredentials: Credentials<MicrosoftOneDriveOAuth2ApiCredentials>;

}

export class MicrosoftOneDrive<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.microsoftOneDrive" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: MicrosoftOneDriveProps) {

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

