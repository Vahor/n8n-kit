// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WebflowApiCredentials } from "../credentials/WebflowApi.ts";
import type { WebflowOAuth2ApiCredentials } from "../credentials/WebflowOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { WebflowTriggerV1NodeParameters } from "../nodes/WebflowTriggerV1";
import { Node, type NodeProps } from "../../nodes/node";

export interface WebflowTriggerV1Props extends NodeProps {
    readonly parameters: WebflowTriggerV1NodeParameters;
    readonly webflowApiCredentials?: Credentials<WebflowApiCredentials>;
    readonly webflowOAuth2ApiCredentials?: Credentials<WebflowOAuth2ApiCredentials>;
}

/**
 * Handle Webflow events via webhooks
 */
export class WebflowTriggerV1<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.webflowTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: WebflowTriggerV1Props) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.webflowApiCredentials, this.props!.webflowOAuth2ApiCredentials];
    }

}
