// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { AwsS3V1NodeParameters } from "../nodes/AwsS3V1";
import { Node, type NodeProps } from "../../nodes";

export interface AwsS3V1Props extends NodeProps, AwsS3V1NodeParameters {

    readonly awsCredentials: Credentials<AwsCredentials>;

}

export class AwsS3V1<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.awsS3" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: AwsS3V1Props) {

        super(id, props);

    }

    override getParameters() : Omit<AwsS3V1NodeParameters, "awsCredentials"> {

        const { awsCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.awsCredentials];

    }


}

