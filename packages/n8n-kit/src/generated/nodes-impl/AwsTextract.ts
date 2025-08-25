// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsTextractNodeParameters } from "../nodes/AwsTextract";
import { Node, type NodeProps } from "../../nodes/node";

export interface AwsTextractProps extends NodeProps {
    readonly parameters: AwsTextractNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Sends data to Amazon Textract
 */
export class AwsTextract<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.awsTextract" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsTextractProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
