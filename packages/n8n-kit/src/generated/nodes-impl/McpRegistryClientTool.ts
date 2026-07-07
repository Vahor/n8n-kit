// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { McpOAuth2ApiCredentials } from "../credentials/McpOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { McpRegistryClientToolNodeParameters } from "../nodes/McpRegistryClientTool";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface McpRegistryClientToolProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: McpRegistryClientToolNodeParameters;
    readonly mcpOAuth2ApiCredentials: Credentials<McpOAuth2ApiCredentials>;
}

/**
 * Runtime backing for MCP registry-derived nodes
 */
export class McpRegistryClientTool<L extends string, C extends IContext = never, P extends McpRegistryClientToolProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.mcpRegistryClientTool" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.mcpOAuth2ApiCredentials];
    }

    public toTools(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_tool" });
        return this;
    }

}
