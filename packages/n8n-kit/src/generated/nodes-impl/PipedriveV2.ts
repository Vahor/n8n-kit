// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PipedriveApiCredentials } from "../credentials/PipedriveApi.ts";
import type { PipedriveOAuth2ApiCredentials } from "../credentials/PipedriveOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PipedriveV2NodeParameters } from "../nodes/PipedriveV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PipedriveV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PipedriveV2NodeParameters;
    readonly pipedriveApiCredentials?: Credentials<PipedriveApiCredentials>;
    readonly pipedriveOAuth2ApiCredentials?: Credentials<PipedriveOAuth2ApiCredentials>;
}

/**
 * Create and edit data in Pipedrive
 */
export class PipedriveV2<L extends string, C extends IContext = never, P extends PipedriveV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.pipedrive" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.pipedriveApiCredentials, this.props?.pipedriveOAuth2ApiCredentials];
    }

}
