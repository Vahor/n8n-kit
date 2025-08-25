// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { KitemakerApiCredentials } from "../credentials/KitemakerApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { KitemakerNodeParameters } from "../nodes/Kitemaker";
import { Node, type NodeProps } from "../../nodes/node";

export interface KitemakerProps extends NodeProps {
    readonly parameters: KitemakerNodeParameters;
    readonly kitemakerApiCredentials: Credentials<KitemakerApiCredentials>;
}

/**
 * Consume the Kitemaker GraphQL API
 */
export class Kitemaker<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.kitemaker" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: KitemakerProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.kitemakerApiCredentials];
    }

}
