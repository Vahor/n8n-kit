// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { SearXngApiCredentials } from "../credentials/SearXngApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { ToolSearXngNodeParameters } from "../nodes/ToolSearXng";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ToolSearXngProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ToolSearXngNodeParameters;
    readonly searXngApiCredentials: Credentials<SearXngApiCredentials>;
}

/**
 * Search in SearXNG
 */
export class ToolSearXng<L extends string, C extends IContext = never, P extends ToolSearXngProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.toolSearXng" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.searXngApiCredentials];
    }

    public toAiTool(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
