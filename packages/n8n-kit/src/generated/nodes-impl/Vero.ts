// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VeroApiCredentials } from "../credentials/VeroApi.ts";
import type { Credentials } from "../../credentials";
import type { VeroNodeParameters } from "../nodes/Vero";
import { Node, type NodeProps } from "../../nodes";

export interface VeroProps extends NodeProps {

    readonly parameters: VeroNodeParameters;
    readonly veroApiCredentials: Credentials<VeroApiCredentials>;

}

/**
 * Consume Vero API
 */
export class Vero<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vero" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: VeroProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.veroApiCredentials];

    }


}
