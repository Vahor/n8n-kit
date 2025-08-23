// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PipedriveApiCredentials } from "../credentials/PipedriveApi.ts";
import type { PipedriveOAuth2ApiCredentials } from "../credentials/PipedriveOAuth2Api.ts";
import type { HttpBasicAuthCredentials } from "../credentials/HttpBasicAuth.ts";
import type { Credentials } from "../../credentials";
import type { PipedriveTriggerNodeParameters } from "../nodes/PipedriveTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface PipedriveTriggerProps extends NodeProps, PipedriveTriggerNodeParameters {

    readonly pipedriveApiCredentials?: Credentials<PipedriveApiCredentials>;
    readonly pipedriveOAuth2ApiCredentials?: Credentials<PipedriveOAuth2ApiCredentials>;
    readonly httpBasicAuthCredentials?: Credentials<HttpBasicAuthCredentials>;

}

export class PipedriveTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.pipedriveTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, public readonly props?: PipedriveTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<PipedriveTriggerNodeParameters, "pipedriveApiCredentials | pipedriveOAuth2ApiCredentials | httpBasicAuthCredentials"> {

        const { pipedriveApiCredentials:_0, pipedriveOAuth2ApiCredentials:_1, httpBasicAuthCredentials:_2, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.pipedriveApiCredentials, this.props.pipedriveOAuth2ApiCredentials, this.props.httpBasicAuthCredentials];

    }


}
