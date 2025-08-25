// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsSqsNodeParameters } from "../nodes/AwsSqs";
import { Node, type NodeProps } from "../../nodes/node";

export interface AwsSqsProps extends NodeProps {
    readonly parameters: AwsSqsNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Sends messages to AWS SQS
 */
export class AwsSqs<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.awsSqs" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsSqsProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
