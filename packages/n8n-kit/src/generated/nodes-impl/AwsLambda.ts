// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { AwsLambdaNodeParameters } from "../nodes/AwsLambda";
import { Node, type NodeProps } from "../../nodes";

export interface AwsLambdaProps extends NodeProps, AwsLambdaNodeParameters {

    readonly awsCredentials: Credentials<AwsCredentials>;

}

export class AwsLambda<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.awsLambda" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: AwsLambdaProps) {

        super(id, props);

    }

    override getParameters() : Omit<AwsLambdaNodeParameters, "awsCredentials"> {

        const { awsCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.awsCredentials];

    }


}

