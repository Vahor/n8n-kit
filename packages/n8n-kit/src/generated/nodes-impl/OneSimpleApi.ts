// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OneSimpleApiCredentials } from "../credentials/OneSimpleApi.ts";
import type { Credentials } from "../../credentials";
import type { OneSimpleApiNodeParameters } from "../nodes/OneSimpleApi";
import { Node, type NodeProps } from "../../nodes";

export interface OneSimpleApiProps extends NodeProps {
    readonly parameters: OneSimpleApiNodeParameters;
    readonly oneSimpleApiCredentials: Credentials<OneSimpleApiCredentials>;
}

/**
 * A toolbox of no-code utilities
 */
export class OneSimpleApi<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.oneSimpleApi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: OneSimpleApiProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.oneSimpleApiCredentials];
    }

}
