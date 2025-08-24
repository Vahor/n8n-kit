// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HumanticAiApiCredentials } from "../credentials/HumanticAiApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { HumanticAiNodeParameters } from "../nodes/HumanticAi";
import { Node, type NodeProps } from "../../nodes/node";

export interface HumanticAiProps extends NodeProps {
    readonly parameters: HumanticAiNodeParameters;
    readonly humanticAiApiCredentials: Credentials<HumanticAiApiCredentials>;
}

/**
 * Consume Humantic AI API
 */
export class HumanticAi<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.humanticAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: HumanticAiProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.humanticAiApiCredentials];
    }

}
