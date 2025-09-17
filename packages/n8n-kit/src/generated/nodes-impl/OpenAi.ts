// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenAiApiCredentials } from "../credentials/OpenAiApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { OpenAiNodeParameters } from "../nodes/OpenAi";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface OpenAiProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: OpenAiNodeParameters;
    readonly openAiApiCredentials: Credentials<OpenAiApiCredentials>;
}

/**
 * Consume Open AI
 */
export class OpenAi<L extends string, C extends IContext = never, P extends OpenAiProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.openAi" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.openAiApiCredentials];
    }

}
