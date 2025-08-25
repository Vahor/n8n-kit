// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ClickUpApiCredentials } from "../credentials/ClickUpApi.ts";
import type { ClickUpOAuth2ApiCredentials } from "../credentials/ClickUpOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { ClickUpTriggerNodeParameters } from "../nodes/ClickUpTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface ClickUpTriggerProps extends NodeProps {
    readonly parameters: ClickUpTriggerNodeParameters;
    readonly clickUpApiCredentials?: Credentials<ClickUpApiCredentials>;
    readonly clickUpOAuth2ApiCredentials?: Credentials<ClickUpOAuth2ApiCredentials>;
}

/**
 * Handle ClickUp events via webhooks (Beta)
 */
export class ClickUpTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.clickUpTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: ClickUpTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.clickUpApiCredentials, this.props!.clickUpOAuth2ApiCredentials];
    }

}
