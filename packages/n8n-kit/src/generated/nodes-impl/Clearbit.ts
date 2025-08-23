// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ClearbitApiCredentials } from "../credentials/ClearbitApi.ts";
import type { Credentials } from "../../credentials";
import type { ClearbitNodeParameters } from "../nodes/Clearbit";
import { Node, type NodeProps } from "../../nodes";

export interface ClearbitProps extends NodeProps {
    readonly parameters: ClearbitNodeParameters;
    readonly clearbitApiCredentials: Credentials<ClearbitApiCredentials>;
}

/**
 * Consume Clearbit API
 */
export class Clearbit<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.clearbit" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ClearbitProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.clearbitApiCredentials];
    }

}
