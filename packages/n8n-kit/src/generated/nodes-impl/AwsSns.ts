// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { AwsSnsNodeParameters } from "../nodes/AwsSns";
import { Node, type NodeProps } from "../../nodes";

export interface AwsSnsProps extends NodeProps {
    readonly parameters: AwsSnsNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Sends data to AWS SNS
 */
export class AwsSns<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.awsSns" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsSnsProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
