// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FreshdeskApiCredentials } from "../credentials/FreshdeskApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FreshdeskNodeParameters } from "../nodes/Freshdesk";
import { Node, type NodeProps } from "../../nodes/node";

export interface FreshdeskProps extends NodeProps {
    readonly parameters: FreshdeskNodeParameters;
    readonly freshdeskApiCredentials: Credentials<FreshdeskApiCredentials>;
}

/**
 * Consume Freshdesk API
 */
export class Freshdesk<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.freshdesk" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: FreshdeskProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.freshdeskApiCredentials];
    }

}
