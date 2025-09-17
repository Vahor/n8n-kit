// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TypeformApiCredentials } from "../credentials/TypeformApi.ts";
import type { TypeformOAuth2ApiCredentials } from "../credentials/TypeformOAuth2Api.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { TypeformTriggerNodeParameters } from "../nodes/TypeformTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface TypeformTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: TypeformTriggerNodeParameters;
    readonly typeformApiCredentials?: Credentials<TypeformApiCredentials>;
    readonly typeformOAuth2ApiCredentials?: Credentials<TypeformOAuth2ApiCredentials>;
}

/**
 * Starts the workflow on a Typeform form submission
 */
export class TypeformTrigger<L extends string, C extends IContext = never, P extends TypeformTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.typeformTrigger" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.typeformApiCredentials, this.props?.typeformOAuth2ApiCredentials];
    }

}
