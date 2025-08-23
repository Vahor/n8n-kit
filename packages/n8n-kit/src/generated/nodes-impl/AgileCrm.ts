// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AgileCrmApiCredentials } from "../credentials/AgileCrmApi.ts";
import type { Credentials } from "../../credentials";
import type { AgileCrmNodeParameters } from "../nodes/AgileCrm";
import { Node, type NodeProps } from "../../nodes";

export interface AgileCrmProps extends NodeProps {
    readonly parameters: AgileCrmNodeParameters;
    readonly agileCrmApiCredentials: Credentials<AgileCrmApiCredentials>;
}

/**
 * Consume Agile CRM API
 */
export class AgileCrm<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.agileCrm" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AgileCrmProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.agileCrmApiCredentials];
    }

}
