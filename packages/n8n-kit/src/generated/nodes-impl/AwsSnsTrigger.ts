// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { AwsAssumeRoleCredentials } from "../credentials/AwsAssumeRole.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsSnsTriggerNodeParameters } from "../nodes/AwsSnsTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AwsSnsTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AwsSnsTriggerNodeParameters;
    readonly awsCredentials?: Credentials<AwsCredentials>;
    readonly awsAssumeRoleCredentials?: Credentials<AwsAssumeRoleCredentials>;
}

/**
 * Handle AWS SNS events via webhooks
 */
export class AwsSnsTrigger<L extends string, C extends IContext = never, P extends AwsSnsTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.awsSnsTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.awsCredentials, this.props?.awsAssumeRoleCredentials];
    }

}
