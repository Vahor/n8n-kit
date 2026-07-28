// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOAuth2ApiCredentials } from "../credentials/MicrosoftOAuth2Api.ts";
import type { MicrosoftEntraServicePrincipalApiCredentials } from "../credentials/MicrosoftEntraServicePrincipalApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftSharePointV2NodeParameters } from "../nodes/MicrosoftSharePointV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MicrosoftSharePointV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MicrosoftSharePointV2NodeParameters;
    readonly microsoftOAuth2ApiCredentials?: Credentials<MicrosoftOAuth2ApiCredentials>;
    readonly microsoftEntraServicePrincipalApiCredentials?: Credentials<MicrosoftEntraServicePrincipalApiCredentials>;
}

/**
 * Interact with Microsoft SharePoint API
 */
export class MicrosoftSharePointV2<L extends string, C extends IContext = never, P extends MicrosoftSharePointV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.microsoftSharePoint" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.microsoftOAuth2ApiCredentials, this.props?.microsoftEntraServicePrincipalApiCredentials];
    }

}
