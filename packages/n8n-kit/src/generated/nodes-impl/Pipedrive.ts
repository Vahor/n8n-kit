// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PipedriveApiCredentials } from "../credentials/PipedriveApi.ts";
import type { PipedriveOAuth2ApiCredentials } from "../credentials/PipedriveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PipedriveNodeParameters } from "../nodes/Pipedrive";
import { Node, type NodeProps } from "../../nodes/node";

export interface PipedriveProps extends NodeProps {
    readonly parameters: PipedriveNodeParameters;
    readonly pipedriveApiCredentials?: Credentials<PipedriveApiCredentials>;
    readonly pipedriveOAuth2ApiCredentials?: Credentials<PipedriveOAuth2ApiCredentials>;
}

/**
 * Create and edit data in Pipedrive
 */
export class Pipedrive<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.pipedrive" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: PipedriveProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.pipedriveApiCredentials, this.props!.pipedriveOAuth2ApiCredentials];
    }

}
