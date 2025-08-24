// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsSesNodeParameters } from "../nodes/AwsSes";
import { Node, type NodeProps } from "../../nodes/node";

export interface AwsSesProps extends NodeProps {
    readonly parameters: AwsSesNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Sends data to AWS SES
 */
export class AwsSes<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.awsSes" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsSesProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
