// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PipedriveApiCredentials } from "../credentials/PipedriveApi.ts";
import type { PipedriveOAuth2ApiCredentials } from "../credentials/PipedriveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PipedriveNodeParameters } from "../nodes/Pipedrive";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PipedriveProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PipedriveNodeParameters;
    readonly pipedriveApiCredentials?: Credentials<PipedriveApiCredentials>;
    readonly pipedriveOAuth2ApiCredentials?: Credentials<PipedriveOAuth2ApiCredentials>;
}

/**
 * Create and edit data in Pipedrive
 */
export class Pipedrive<L extends string, C extends IContext = never, P extends PipedriveProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.pipedrive" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.pipedriveApiCredentials, this.props?.pipedriveOAuth2ApiCredentials];
    }

}
