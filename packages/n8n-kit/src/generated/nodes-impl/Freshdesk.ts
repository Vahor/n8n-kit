// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FreshdeskApiCredentials } from "../credentials/FreshdeskApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FreshdeskNodeParameters } from "../nodes/Freshdesk";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FreshdeskProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FreshdeskNodeParameters;
    readonly freshdeskApiCredentials: Credentials<FreshdeskApiCredentials>;
}

/**
 * Consume Freshdesk API
 */
export class Freshdesk<L extends string, C extends IContext = never, P extends FreshdeskProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.freshdesk" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.freshdeskApiCredentials];
    }

}
