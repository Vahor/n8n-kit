// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MoceanApiCredentials } from "../credentials/MoceanApi.ts";
import type { Credentials } from "../../credentials";
import type { MoceanNodeParameters } from "../nodes/Mocean";
import { Node, type NodeProps } from "../../nodes";

export interface MoceanProps extends NodeProps {
    readonly parameters: MoceanNodeParameters;
    readonly moceanApiCredentials: Credentials<MoceanApiCredentials>;
}

/**
 * Send SMS and voice messages via Mocean
 */
export class Mocean<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.mocean" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MoceanProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.moceanApiCredentials];
    }

}
