// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftDataverseOAuth2ApiCredentials } from "../credentials/MicrosoftDataverseOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftDataverseNodeParameters } from "../nodes/MicrosoftDataverse";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MicrosoftDataverseProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MicrosoftDataverseNodeParameters;
    readonly microsoftDataverseOAuth2ApiCredentials: Credentials<MicrosoftDataverseOAuth2ApiCredentials>;
}

/**
 * Interact with the Microsoft Dataverse Web API
 */
export class MicrosoftDataverse<L extends string, C extends IContext = never, P extends MicrosoftDataverseProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.microsoftDataverse" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.microsoftDataverseOAuth2ApiCredentials];
    }

}
