// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsIamNodeParameters } from "../nodes/AwsIam";
import { Node, type NodeProps } from "../../nodes/node";

export interface AwsIamProps extends NodeProps {
    readonly parameters: AwsIamNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Interacts with Amazon IAM
 */
export class AwsIam<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.awsIam" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsIamProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
