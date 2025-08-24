// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AsanaApiCredentials } from "../credentials/AsanaApi.ts";
import type { AsanaOAuth2ApiCredentials } from "../credentials/AsanaOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { AsanaTriggerNodeParameters } from "../nodes/AsanaTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface AsanaTriggerProps extends NodeProps {
    readonly parameters: AsanaTriggerNodeParameters;
    readonly asanaApiCredentials?: Credentials<AsanaApiCredentials>;
    readonly asanaOAuth2ApiCredentials?: Credentials<AsanaOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when Asana events occur.
 */
export class AsanaTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.asanaTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: AsanaTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.asanaApiCredentials, this.props!.asanaOAuth2ApiCredentials];
    }

}
