// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsComprehendNodeParameters } from "../nodes/AwsComprehend";
import { Node, type NodeProps } from "../../nodes/node";

export interface AwsComprehendProps extends NodeProps {
    readonly parameters: AwsComprehendNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Sends data to Amazon Comprehend
 */
export class AwsComprehend<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.awsComprehend" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsComprehendProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
