// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HumanticAiApiCredentials } from "../credentials/HumanticAiApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { HumanticAiNodeParameters } from "../nodes/HumanticAi";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface HumanticAiProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: HumanticAiNodeParameters;
    readonly humanticAiApiCredentials: Credentials<HumanticAiApiCredentials>;
}

/**
 * Consume Humantic AI API
 */
export class HumanticAi<L extends string, C extends IContext = never, P extends HumanticAiProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.humanticAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.humanticAiApiCredentials];
    }

}
