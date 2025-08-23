// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { AwsIamNodeParameters } from "../nodes/AwsIam";
import { Node, type NodeProps } from "../../nodes";

export interface AwsIamProps extends NodeProps {
    readonly parameters: AwsIamNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Interacts with Amazon IAM
 */
export class AwsIam<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.awsIam" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsIamProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
