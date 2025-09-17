// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FacebookGraphApiCredentials } from "../credentials/FacebookGraphApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FacebookGraphApiNodeParameters } from "../nodes/FacebookGraphApi";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FacebookGraphApiProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FacebookGraphApiNodeParameters;
    readonly facebookGraphApiCredentials: Credentials<FacebookGraphApiCredentials>;
}

/**
 * Interacts with Facebook using the Graph API
 */
export class FacebookGraphApi<L extends string, C extends IContext = never, P extends FacebookGraphApiProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.facebookGraphApi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.facebookGraphApiCredentials];
    }

}
