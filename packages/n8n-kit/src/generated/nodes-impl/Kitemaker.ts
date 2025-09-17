// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KitemakerApiCredentials } from "../credentials/KitemakerApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { KitemakerNodeParameters } from "../nodes/Kitemaker";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface KitemakerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: KitemakerNodeParameters;
    readonly kitemakerApiCredentials: Credentials<KitemakerApiCredentials>;
}

/**
 * Consume the Kitemaker GraphQL API
 */
export class Kitemaker<L extends string, C extends IContext = never, P extends KitemakerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.kitemaker" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.kitemakerApiCredentials];
    }

}
