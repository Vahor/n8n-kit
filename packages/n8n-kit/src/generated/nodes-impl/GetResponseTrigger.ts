// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GetResponseApiCredentials } from "../credentials/GetResponseApi.ts";
import type { GetResponseOAuth2ApiCredentials } from "../credentials/GetResponseOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GetResponseTriggerNodeParameters } from "../nodes/GetResponseTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface GetResponseTriggerProps extends NodeProps {
    readonly parameters: GetResponseTriggerNodeParameters;
    readonly getResponseApiCredentials?: Credentials<GetResponseApiCredentials>;
    readonly getResponseOAuth2ApiCredentials?: Credentials<GetResponseOAuth2ApiCredentials>;
}

/**
 * Starts the workflow when GetResponse events occur
 */
export class GetResponseTrigger<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.getResponseTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: GetResponseTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.getResponseApiCredentials, this.props!.getResponseOAuth2ApiCredentials];
    }

}
