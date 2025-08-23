// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { AwsComprehendNodeParameters } from "../nodes/AwsComprehend";
import { Node, type NodeProps } from "../../nodes";

export interface AwsComprehendProps extends NodeProps, AwsComprehendNodeParameters {

    readonly awsCredentials: Credentials<AwsCredentials>;

}

export class AwsComprehend<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.awsComprehend" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: AwsComprehendProps) {

        super(id, props);

    }

    override getParameters() : Omit<AwsComprehendNodeParameters, "awsCredentials"> {

        const { awsCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.awsCredentials];

    }


}

