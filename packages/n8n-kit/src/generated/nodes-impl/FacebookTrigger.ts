// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FacebookGraphAppApiCredentials } from "../credentials/FacebookGraphAppApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FacebookTriggerNodeParameters } from "../nodes/FacebookTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FacebookTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FacebookTriggerNodeParameters;
    readonly facebookGraphAppApiCredentials: Credentials<FacebookGraphAppApiCredentials>;
}

/**
 * Starts the workflow when Facebook events occur
 */
export class FacebookTrigger<L extends string, C extends IContext = never, P extends FacebookTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.facebookTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.facebookGraphAppApiCredentials];
    }

}
