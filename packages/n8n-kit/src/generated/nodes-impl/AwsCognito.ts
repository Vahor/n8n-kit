// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsCognitoNodeParameters } from "../nodes/AwsCognito";
import { Node, type NodeProps } from "../../nodes/node";

export interface AwsCognitoProps extends NodeProps {
    readonly parameters: AwsCognitoNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Sends data to AWS Cognito
 */
export class AwsCognito<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.awsCognito" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsCognitoProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
