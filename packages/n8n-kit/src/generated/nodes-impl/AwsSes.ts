// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { AwsSesNodeParameters } from "../nodes/AwsSes";
import { Node, type NodeProps } from "../../nodes";

export interface AwsSesProps extends NodeProps, AwsSesNodeParameters {

    readonly awsCredentials: Credentials<AwsCredentials>;

}

export class AwsSes<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.awsSes" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: AwsSesProps) {

        super(id, props);

    }

    override getParameters() : Omit<AwsSesNodeParameters, "awsCredentials"> {

        const { awsCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.awsCredentials];

    }


}

