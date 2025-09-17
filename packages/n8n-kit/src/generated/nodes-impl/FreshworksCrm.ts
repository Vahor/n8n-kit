// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FreshworksCrmApiCredentials } from "../credentials/FreshworksCrmApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FreshworksCrmNodeParameters } from "../nodes/FreshworksCrm";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FreshworksCrmProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FreshworksCrmNodeParameters;
    readonly freshworksCrmApiCredentials: Credentials<FreshworksCrmApiCredentials>;
}

/**
 * Consume the Freshworks CRM API
 */
export class FreshworksCrm<L extends string, C extends IContext = never, P extends FreshworksCrmProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.freshworksCrm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.freshworksCrmApiCredentials];
    }

}
