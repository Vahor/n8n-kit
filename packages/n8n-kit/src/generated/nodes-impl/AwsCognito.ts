// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { AwsCognitoNodeParameters } from "../nodes/AwsCognito";
import { Node, type NodeProps } from "../../nodes";

export interface AwsCognitoProps extends NodeProps {

    readonly parameters: AwsCognitoNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;

}

/**
 * Sends data to AWS Cognito
 */
export class AwsCognito<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.awsCognito" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsCognitoProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.awsCredentials];

    }


}
