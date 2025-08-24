// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WebflowOAuth2ApiCredentials } from "../credentials/WebflowOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WebflowV2NodeParameters } from "../nodes/WebflowV2";
import { Node, type NodeProps } from "../../nodes/node";

export interface WebflowV2Props extends NodeProps {
    readonly parameters: WebflowV2NodeParameters;
    readonly webflowOAuth2ApiCredentials: Credentials<WebflowOAuth2ApiCredentials>;
}

/**
 * Consume the Webflow API
 */
export class WebflowV2<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.webflow" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: WebflowV2Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.webflowOAuth2ApiCredentials];
    }

}
