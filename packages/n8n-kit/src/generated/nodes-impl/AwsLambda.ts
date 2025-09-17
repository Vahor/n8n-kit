// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsLambdaNodeParameters } from "../nodes/AwsLambda";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AwsLambdaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AwsLambdaNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Invoke functions on AWS Lambda
 */
export class AwsLambda<L extends string, C extends IContext = never, P extends AwsLambdaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.awsLambda" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.awsCredentials];
    }

}
