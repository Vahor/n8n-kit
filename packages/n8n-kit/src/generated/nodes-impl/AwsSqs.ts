// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { AwsSqsNodeParameters } from "../nodes/AwsSqs";
import { Node, type NodeProps } from "../../nodes";

export interface AwsSqsProps extends NodeProps {

    readonly parameters: AwsSqsNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;

}

export class AwsSqs<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.awsSqs" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsSqsProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.awsCredentials];

    }


}
