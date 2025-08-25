// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MistralCloudApiCredentials } from "../credentials/MistralCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MistralAiNodeParameters } from "../nodes/MistralAi";
import { Node, type NodeProps } from "../../nodes/node";

export interface MistralAiProps extends NodeProps {
    readonly parameters: MistralAiNodeParameters;
    readonly mistralCloudApiCredentials: Credentials<MistralCloudApiCredentials>;
}

/**
 * Consume Mistral AI API
 */
export class MistralAi<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.mistralAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MistralAiProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mistralCloudApiCredentials];
    }

}
