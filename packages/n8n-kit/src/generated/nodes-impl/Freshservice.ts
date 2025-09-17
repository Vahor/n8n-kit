// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FreshserviceApiCredentials } from "../credentials/FreshserviceApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FreshserviceNodeParameters } from "../nodes/Freshservice";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FreshserviceProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FreshserviceNodeParameters;
    readonly freshserviceApiCredentials: Credentials<FreshserviceApiCredentials>;
}

/**
 * Consume the Freshservice API
 */
export class Freshservice<L extends string, C extends IContext = never, P extends FreshserviceProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.freshservice" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.freshserviceApiCredentials];
    }

}
