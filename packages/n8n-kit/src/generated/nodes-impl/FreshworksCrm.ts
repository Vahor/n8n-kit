// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FreshworksCrmApiCredentials } from "../credentials/FreshworksCrmApi.ts";
import type { Credentials } from "../../credentials";
import type { FreshworksCrmNodeParameters } from "../nodes/FreshworksCrm";
import { Node, type NodeProps } from "../../nodes";

export interface FreshworksCrmProps extends NodeProps {
    readonly parameters: FreshworksCrmNodeParameters;
    readonly freshworksCrmApiCredentials: Credentials<FreshworksCrmApiCredentials>;
}

/**
 * Consume the Freshworks CRM API
 */
export class FreshworksCrm<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.freshworksCrm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: FreshworksCrmProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.freshworksCrmApiCredentials];
    }

}
