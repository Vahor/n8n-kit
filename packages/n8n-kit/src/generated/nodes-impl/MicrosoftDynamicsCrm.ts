// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MicrosoftDynamicsOAuth2ApiCredentials } from "../credentials/MicrosoftDynamicsOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MicrosoftDynamicsCrmNodeParameters } from "../nodes/MicrosoftDynamicsCrm";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface MicrosoftDynamicsCrmProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: MicrosoftDynamicsCrmNodeParameters;
    readonly microsoftDynamicsOAuth2ApiCredentials: Credentials<MicrosoftDynamicsOAuth2ApiCredentials>;
}

/**
 * Consume Microsoft Dynamics CRM API
 */
export class MicrosoftDynamicsCrm<L extends string, C extends IContext = never, P extends MicrosoftDynamicsCrmProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.microsoftDynamicsCrm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.microsoftDynamicsOAuth2ApiCredentials];
    }

}
