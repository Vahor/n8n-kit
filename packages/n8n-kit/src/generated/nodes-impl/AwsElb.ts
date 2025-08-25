// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsElbNodeParameters } from "../nodes/AwsElb";
import { Node, type NodeProps } from "../../nodes/node";

export interface AwsElbProps extends NodeProps {
    readonly parameters: AwsElbNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Sends data to AWS ELB API
 */
export class AwsElb<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.awsElb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsElbProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
