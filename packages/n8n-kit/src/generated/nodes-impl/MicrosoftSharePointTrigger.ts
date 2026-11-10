// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOAuth2ApiCredentials } from "../credentials/MicrosoftOAuth2Api.ts";
import type { MicrosoftEntraServicePrincipalApiCredentials } from "../credentials/MicrosoftEntraServicePrincipalApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftSharePointTriggerNodeParameters } from "../nodes/MicrosoftSharePointTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MicrosoftSharePointTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MicrosoftSharePointTriggerNodeParameters;
    readonly microsoftOAuth2ApiCredentials?: Credentials<MicrosoftOAuth2ApiCredentials>;
    readonly microsoftEntraServicePrincipalApiCredentials?: Credentials<MicrosoftEntraServicePrincipalApiCredentials>;
}

/**
 * Starts a workflow when a file or list item changes in Microsoft SharePoint
 */
export class MicrosoftSharePointTrigger<L extends string, C extends IContext = never, P extends MicrosoftSharePointTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.microsoftSharePointTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.microsoftOAuth2ApiCredentials, this.props?.microsoftEntraServicePrincipalApiCredentials];
    }

}
