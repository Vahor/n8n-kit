// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsRekognitionNodeParameters } from "../nodes/AwsRekognition";
import { Node, type NodeProps } from "../../nodes/node";

export interface AwsRekognitionProps extends NodeProps {
    readonly parameters: AwsRekognitionNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Sends data to AWS Rekognition
 */
export class AwsRekognition<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.awsRekognition" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsRekognitionProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
