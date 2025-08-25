// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsDynamoDBNodeParameters } from "../nodes/AwsDynamoDB";
import { Node, type NodeProps } from "../../nodes/node";

export interface AwsDynamoDBProps extends NodeProps {
    readonly parameters: AwsDynamoDBNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Consume the AWS DynamoDB API
 */
export class AwsDynamoDB<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.awsDynamoDb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsDynamoDBProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
