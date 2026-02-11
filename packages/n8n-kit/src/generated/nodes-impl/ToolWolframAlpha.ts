// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WolframAlphaApiCredentials } from "../credentials/WolframAlphaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { ToolWolframAlphaNodeParameters } from "../nodes/ToolWolframAlpha";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ToolWolframAlphaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ToolWolframAlphaNodeParameters;
    readonly wolframAlphaApiCredentials: Credentials<WolframAlphaApiCredentials>;
}

/**
 * Connects to WolframAlpha's computational intelligence engine.
 */
export class ToolWolframAlpha<L extends string, C extends IContext = never, P extends ToolWolframAlphaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.toolWolframAlpha" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.wolframAlphaApiCredentials];
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
