// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WebflowApiCredentials } from "../credentials/WebflowApi.ts";
import type { WebflowOAuth2ApiCredentials } from "../credentials/WebflowOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WebflowV1NodeParameters } from "../nodes/WebflowV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WebflowV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WebflowV1NodeParameters;
    readonly webflowApiCredentials?: Credentials<WebflowApiCredentials>;
    readonly webflowOAuth2ApiCredentials?: Credentials<WebflowOAuth2ApiCredentials>;
}

/**
 * Consume the Webflow API
 */
export class WebflowV1<L extends string, C extends IContext = never, P extends WebflowV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.webflow" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.webflowApiCredentials, this.props?.webflowOAuth2ApiCredentials];
    }

}
