// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { AwsSnsTriggerNodeParameters } from "../nodes/AwsSnsTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface AwsSnsTriggerProps extends NodeProps, AwsSnsTriggerNodeParameters {

    readonly awsCredentials: Credentials<AwsCredentials>;

}

export class AwsSnsTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.awsSnsTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: AwsSnsTriggerProps) {

        super(id, props);

    }

    override getParameters() {

        const { awsCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.awsCredentials];

    }


}

