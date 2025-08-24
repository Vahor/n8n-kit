// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsLambdaNodeParameters } from "../nodes/AwsLambda";
import { Node, type NodeProps } from "../../nodes/node";

export interface AwsLambdaProps extends NodeProps {
    readonly parameters: AwsLambdaNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Invoke functions on AWS Lambda
 */
export class AwsLambda<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.awsLambda" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsLambdaProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
