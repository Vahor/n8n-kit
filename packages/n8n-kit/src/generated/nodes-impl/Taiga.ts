// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TaigaApiCredentials } from "../credentials/TaigaApi.ts";
import type { Credentials } from "../../credentials";
import type { TaigaNodeParameters } from "../nodes/Taiga";
import { Node, type NodeProps } from "../../nodes/node";

export interface TaigaProps extends NodeProps {
    readonly parameters: TaigaNodeParameters;
    readonly taigaApiCredentials: Credentials<TaigaApiCredentials>;
}

/**
 * Consume Taiga API
 */
export class Taiga<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.taiga" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TaigaProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.taigaApiCredentials];
    }

}
