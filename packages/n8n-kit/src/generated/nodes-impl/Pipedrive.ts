// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PipedriveApiCredentials } from "../credentials/PipedriveApi.ts";
import type { PipedriveOAuth2ApiCredentials } from "../credentials/PipedriveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { PipedriveNodeParameters } from "../nodes/Pipedrive";
import { Node, type NodeProps } from "../../nodes";

export interface PipedriveProps extends NodeProps, PipedriveNodeParameters {

    readonly pipedriveApiCredentials?: Credentials<PipedriveApiCredentials>;
    readonly pipedriveOAuth2ApiCredentials?: Credentials<PipedriveOAuth2ApiCredentials>;

}

export class Pipedrive<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.pipedrive" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: PipedriveProps) {

        super(id, props);

    }

    override getParameters() : Omit<PipedriveNodeParameters, "pipedriveApiCredentials | pipedriveOAuth2ApiCredentials"> {

        const { pipedriveApiCredentials:_0, pipedriveOAuth2ApiCredentials:_1, ...rest } = this.props ?? {};
        return rest;

    }

    override getCredentials() {

        return [this.props?.pipedriveApiCredentials, this.props?.pipedriveOAuth2ApiCredentials];

    }


}
