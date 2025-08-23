// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { AwsCognitoNodeParameters } from "../nodes/AwsCognito";
import { Node, type NodeProps } from "../../nodes";

export interface AwsCognitoProps extends NodeProps, AwsCognitoNodeParameters {

    readonly awsCredentials: Credentials<AwsCredentials>;

}

export class AwsCognito<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.awsCognito" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: AwsCognitoProps) {

        super(id, props);

    }

    override getParameters() {

        const { awsCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.awsCredentials];

    }


}

