// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsSnsTriggerNodeParameters } from "../nodes/AwsSnsTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface AwsSnsTriggerProps extends NodeProps {
    readonly parameters: AwsSnsTriggerNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Handle AWS SNS events via webhooks
 */
export class AwsSnsTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.awsSnsTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsSnsTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
