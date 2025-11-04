// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { AwsAssumeRoleCredentials } from "../credentials/AwsAssumeRole.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsDynamoDBNodeParameters } from "../nodes/AwsDynamoDB";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AwsDynamoDBProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AwsDynamoDBNodeParameters;
    readonly awsCredentials?: Credentials<AwsCredentials>;
    readonly awsAssumeRoleCredentials?: Credentials<AwsAssumeRoleCredentials>;
}

/**
 * Consume the AWS DynamoDB API
 */
export class AwsDynamoDB<L extends string, C extends IContext = never, P extends AwsDynamoDBProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.awsDynamoDb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.awsCredentials, this.props?.awsAssumeRoleCredentials];
    }

}
