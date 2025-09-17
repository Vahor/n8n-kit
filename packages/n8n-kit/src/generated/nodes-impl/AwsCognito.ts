// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsCognitoNodeParameters } from "../nodes/AwsCognito";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AwsCognitoProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AwsCognitoNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Sends data to AWS Cognito
 */
export class AwsCognito<L extends string, C extends IContext = never, P extends AwsCognitoProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.awsCognito" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.awsCredentials];
    }

}
