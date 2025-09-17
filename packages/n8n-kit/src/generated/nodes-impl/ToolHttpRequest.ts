// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext, IChainable } from "../../workflow/chain/types";
import type { ToolHttpRequestNodeParameters } from "../nodes/ToolHttpRequest";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ToolHttpRequestProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ToolHttpRequestNodeParameters;
}

/**
 * Makes an HTTP request and returns the response data
 */
export class ToolHttpRequest<L extends string, C extends IContext = never, P extends ToolHttpRequestProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.toolHttpRequest" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
