// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { AwsAssumeRoleCredentials } from "../credentials/AwsAssumeRole.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsS3V2NodeParameters } from "../nodes/AwsS3V2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AwsS3V2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AwsS3V2NodeParameters;
    readonly awsCredentials?: Credentials<AwsCredentials>;
    readonly awsAssumeRoleCredentials?: Credentials<AwsAssumeRoleCredentials>;
}

/**
 * Sends data to AWS S3
 */
export class AwsS3V2<L extends string, C extends IContext = never, P extends AwsS3V2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.awsS3" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.awsCredentials, this.props?.awsAssumeRoleCredentials];
    }

}
