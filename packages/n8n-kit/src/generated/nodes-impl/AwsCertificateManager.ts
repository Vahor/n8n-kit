// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { AwsCertificateManagerNodeParameters } from "../nodes/AwsCertificateManager";
import { Node, type NodeProps } from "../../nodes";

export interface AwsCertificateManagerProps extends NodeProps, AwsCertificateManagerNodeParameters {

    readonly awsCredentials: Credentials<AwsCredentials>;

}

export class AwsCertificateManager<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.awsCertificateManager" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: AwsCertificateManagerProps) {

        super(id, props);

    }

    override getParameters() : Omit<AwsCertificateManagerNodeParameters, "awsCredentials"> {

        const { awsCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.awsCredentials];

    }


}
