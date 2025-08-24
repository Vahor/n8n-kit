// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { EgoiApiCredentials } from "../credentials/EgoiApi.ts";
import type { Credentials } from "../../credentials";
import type { EgoiNodeParameters } from "../nodes/Egoi";
import { Node, type NodeProps } from "../../nodes/node";

export interface EgoiProps extends NodeProps {
    readonly parameters: EgoiNodeParameters;
    readonly egoiApiCredentials: Credentials<EgoiApiCredentials>;
}

/**
 * Consume E-goi API
 */
export class Egoi<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.egoi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: EgoiProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.egoiApiCredentials];
    }

}
