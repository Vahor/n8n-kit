// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { AwsAssumeRoleCredentials } from "../credentials/AwsAssumeRole.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsCertificateManagerNodeParameters } from "../nodes/AwsCertificateManager";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface AwsCertificateManagerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: AwsCertificateManagerNodeParameters;
    readonly awsCredentials?: Credentials<AwsCredentials>;
    readonly awsAssumeRoleCredentials?: Credentials<AwsAssumeRoleCredentials>;
}

/**
 * Sends data to AWS Certificate Manager
 */
export class AwsCertificateManager<L extends string, C extends IContext = never, P extends AwsCertificateManagerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.awsCertificateManager" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.awsCredentials, this.props?.awsAssumeRoleCredentials];
    }

}
