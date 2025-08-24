// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TypeformApiCredentials } from "../credentials/TypeformApi.ts";
import type { TypeformOAuth2ApiCredentials } from "../credentials/TypeformOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TypeformTriggerNodeParameters } from "../nodes/TypeformTrigger";
import { Node, type NodeProps } from "../../nodes/node";

export interface TypeformTriggerProps extends NodeProps {
    readonly parameters: TypeformTriggerNodeParameters;
    readonly typeformApiCredentials?: Credentials<TypeformApiCredentials>;
    readonly typeformOAuth2ApiCredentials?: Credentials<TypeformOAuth2ApiCredentials>;
}

/**
 * Starts the workflow on a Typeform form submission
 */
export class TypeformTrigger<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.typeformTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: TypeformTriggerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.typeformApiCredentials, this.props!.typeformOAuth2ApiCredentials];
    }

}
