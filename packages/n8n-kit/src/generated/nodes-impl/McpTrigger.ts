// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBearerAuthCredentials } from "../credentials/HttpBearerAuth.ts";
import type { HttpHeaderAuthCredentials } from "../credentials/HttpHeaderAuth.ts";
import type { Credentials } from "../../credentials";
import type { State } from "../../workflow/chain/state";
import { DEFAULT_NODE_SIZE } from "../../nodes/node";
import type { McpTriggerNodeParameters } from "../nodes/McpTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface McpTriggerProps extends NodeProps {
    readonly parameters: McpTriggerNodeParameters;
    readonly httpBearerAuthCredentials?: Credentials<HttpBearerAuthCredentials>;
    readonly httpHeaderAuthCredentials?: Credentials<HttpHeaderAuthCredentials>;
}

/**
 * Expose n8n tools as an MCP Server endpoint
 */
export class McpTrigger<L extends string> extends Node<L> {
    protected type = "@n8n/n8n-nodes-langchain.mcpTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: McpTriggerProps) {
        super(id, props);
        this.size = { width: DEFAULT_NODE_SIZE.width * 2, height: DEFAULT_NODE_SIZE.height };
    }

    override getCredentials() {
        return [this.props!.httpBearerAuthCredentials, this.props!.httpHeaderAuthCredentials];
    }

    public withTools(next: State): this {
        super.addNext(next.startState, { type: "ai_tool", direction: "input" });
        return this;
    }

}
