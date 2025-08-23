// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { AwsDynamoDBNodeParameters } from "../nodes/AwsDynamoDB";
import { Node, type NodeProps } from "../../nodes";

export interface AwsDynamoDBProps extends NodeProps {
    readonly parameters: AwsDynamoDBNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Consume the AWS DynamoDB API
 */
export class AwsDynamoDB<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.awsDynamoDb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsDynamoDBProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
