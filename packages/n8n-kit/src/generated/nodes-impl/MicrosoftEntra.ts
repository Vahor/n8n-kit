// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftEntraOAuth2ApiCredentials } from "../credentials/MicrosoftEntraOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftEntraNodeParameters } from "../nodes/MicrosoftEntra";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MicrosoftEntraProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MicrosoftEntraNodeParameters;
    readonly microsoftEntraOAuth2ApiCredentials: Credentials<MicrosoftEntraOAuth2ApiCredentials>;
}

/**
 * Interact with Microsoft Entra ID API
 */
export class MicrosoftEntra<L extends string, C extends IContext = never, P extends MicrosoftEntraProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.microsoftEntra" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.microsoftEntraOAuth2ApiCredentials];
    }

}
