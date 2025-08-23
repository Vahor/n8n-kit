// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { AwsTranscribeNodeParameters } from "../nodes/AwsTranscribe";
import { Node, type NodeProps } from "../../nodes";

export interface AwsTranscribeProps extends NodeProps, AwsTranscribeNodeParameters {

    readonly awsCredentials: Credentials<AwsCredentials>;

}

export class AwsTranscribe<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.awsTranscribe" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: AwsTranscribeProps) {

        super(id, props);

    }

    override getParameters() : Omit<AwsTranscribeNodeParameters, "awsCredentials"> {

        const { awsCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.awsCredentials];

    }


}
