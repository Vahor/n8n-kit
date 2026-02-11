// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HttpBearerAuthCredentials } from "../credentials/HttpBearerAuth.ts";
import type { HttpHeaderAuthCredentials } from "../credentials/HttpHeaderAuth.ts";
import type { McpOAuth2ApiCredentials } from "../credentials/McpOAuth2Api.ts";
import type { HttpMultipleHeadersAuthCredentials } from "../credentials/HttpMultipleHeadersAuth.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { McpClientNodeParameters } from "../nodes/McpClient";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface McpClientProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: McpClientNodeParameters;
    readonly httpBearerAuthCredentials?: Credentials<HttpBearerAuthCredentials>;
    readonly httpHeaderAuthCredentials?: Credentials<HttpHeaderAuthCredentials>;
    readonly mcpOAuth2ApiCredentials?: Credentials<McpOAuth2ApiCredentials>;
    readonly httpMultipleHeadersAuthCredentials?: Credentials<HttpMultipleHeadersAuthCredentials>;
}

/**
 * Standalone MCP Client
 */
export class McpClient<L extends string, C extends IContext = never, P extends McpClientProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.mcpClient" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.httpBearerAuthCredentials, this.props?.httpHeaderAuthCredentials, this.props?.mcpOAuth2ApiCredentials, this.props?.httpMultipleHeadersAuthCredentials];
    }

}
