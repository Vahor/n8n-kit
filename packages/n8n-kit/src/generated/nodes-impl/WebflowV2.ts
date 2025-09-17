// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WebflowOAuth2ApiCredentials } from "../credentials/WebflowOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WebflowV2NodeParameters } from "../nodes/WebflowV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WebflowV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WebflowV2NodeParameters;
    readonly webflowOAuth2ApiCredentials: Credentials<WebflowOAuth2ApiCredentials>;
}

/**
 * Consume the Webflow API
 */
export class WebflowV2<L extends string, C extends IContext = never, P extends WebflowV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.webflow" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.webflowOAuth2ApiCredentials];
    }

}
