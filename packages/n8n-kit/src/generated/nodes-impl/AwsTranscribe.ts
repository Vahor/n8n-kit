// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsTranscribeNodeParameters } from "../nodes/AwsTranscribe";
import { Node, type NodeProps } from "../../nodes/node";

export interface AwsTranscribeProps extends NodeProps {
    readonly parameters: AwsTranscribeNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Sends data to AWS Transcribe
 */
export class AwsTranscribe<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.awsTranscribe" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsTranscribeProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
