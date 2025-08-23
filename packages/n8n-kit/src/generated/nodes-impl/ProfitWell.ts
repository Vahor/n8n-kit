// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ProfitWellApiCredentials } from "../credentials/ProfitWellApi.ts";
import type { Credentials } from "../../credentials";
import type { ProfitWellNodeParameters } from "../nodes/ProfitWell";
import { Node, type NodeProps } from "../../nodes";

export interface ProfitWellProps extends NodeProps {

    readonly parameters: ProfitWellNodeParameters;
    readonly profitWellApiCredentials: Credentials<ProfitWellApiCredentials>;

}

/**
 * Consume ProfitWell API
 */
export class ProfitWell<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.profitWell" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ProfitWellProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.profitWellApiCredentials];

    }


}
