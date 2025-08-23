// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { AwsTextractNodeParameters } from "../nodes/AwsTextract";
import { Node, type NodeProps } from "../../nodes";

export interface AwsTextractProps extends NodeProps {
    readonly parameters: AwsTextractNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Sends data to Amazon Textract
 */
export class AwsTextract<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.awsTextract" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsTextractProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
