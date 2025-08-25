// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AwsCredentials } from "../credentials/Aws.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AwsCertificateManagerNodeParameters } from "../nodes/AwsCertificateManager";
import { Node, type NodeProps } from "../../nodes/node";

export interface AwsCertificateManagerProps extends NodeProps {
    readonly parameters: AwsCertificateManagerNodeParameters;
    readonly awsCredentials: Credentials<AwsCredentials>;
}

/**
 * Sends data to AWS Certificate Manager
 */
export class AwsCertificateManager<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.awsCertificateManager" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AwsCertificateManagerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.awsCredentials];
    }

}
