// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftOneDriveOAuth2ApiCredentials } from "../credentials/MicrosoftOneDriveOAuth2Api.ts";
import type { MicrosoftOAuth2ApiCredentials } from "../credentials/MicrosoftOAuth2Api.ts";
import type { MicrosoftEntraServicePrincipalApiCredentials } from "../credentials/MicrosoftEntraServicePrincipalApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftOneDriveNodeParameters } from "../nodes/MicrosoftOneDrive";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MicrosoftOneDriveProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MicrosoftOneDriveNodeParameters;
    readonly microsoftOneDriveOAuth2ApiCredentials?: Credentials<MicrosoftOneDriveOAuth2ApiCredentials>;
    readonly microsoftOAuth2ApiCredentials?: Credentials<MicrosoftOAuth2ApiCredentials>;
    readonly microsoftEntraServicePrincipalApiCredentials?: Credentials<MicrosoftEntraServicePrincipalApiCredentials>;
}

/**
 * Consume Microsoft OneDrive API
 */
export class MicrosoftOneDrive<L extends string, C extends IContext = never, P extends MicrosoftOneDriveProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.microsoftOneDrive" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.microsoftOneDriveOAuth2ApiCredentials, this.props?.microsoftOAuth2ApiCredentials, this.props?.microsoftEntraServicePrincipalApiCredentials];
    }

}
