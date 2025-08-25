// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CodaApiCredentials } from "../credentials/CodaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CodaNodeParameters } from "../nodes/Coda";
import { Node, type NodeProps } from "../../nodes/node";

export interface CodaProps extends NodeProps {
    readonly parameters: CodaNodeParameters;
    readonly codaApiCredentials: Credentials<CodaApiCredentials>;
}

/**
 * Consume Coda API
 */
export class Coda<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.coda" as const;
    protected typeVersion = 1.1 as const;

    constructor(id: L, override props: CodaProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.codaApiCredentials];
    }

}
