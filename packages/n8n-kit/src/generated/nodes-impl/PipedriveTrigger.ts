// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PipedriveApiCredentials } from "../credentials/PipedriveApi.ts";
import type { PipedriveOAuth2ApiCredentials } from "../credentials/PipedriveOAuth2Api.ts";
import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PipedriveTriggerNodeParameters } from "../nodes/PipedriveTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface PipedriveTriggerProps extends NodeProps {
    readonly parameters: PipedriveTriggerNodeParameters;
    readonly pipedriveApiCredentials?: Credentials<PipedriveApiCredentials>;
    readonly pipedriveOAuth2ApiCredentials?: Credentials<PipedriveOAuth2ApiCredentials>;
    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;
}

/**
 * Starts the workflow when Pipedrive events occur
 */
export class PipedriveTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.pipedriveTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: PipedriveTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.pipedriveApiCredentials, this.props!.pipedriveOAuth2ApiCredentials, this.props!.httpBasicAuthCredentials];
    }

}
