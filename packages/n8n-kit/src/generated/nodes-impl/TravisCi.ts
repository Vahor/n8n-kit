// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TravisCiApiCredentials } from "../credentials/TravisCiApi.ts";
import type { Credentials } from "../../credentials";
import type { TravisCiNodeParameters } from "../nodes/TravisCi";
import { Node, type NodeProps } from "../../nodes";

export interface TravisCiProps extends NodeProps {
    readonly parameters: TravisCiNodeParameters;
    readonly travisCiApiCredentials: Credentials<TravisCiApiCredentials>;
}

/**
 * Consume TravisCI API
 */
export class TravisCi<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.travisCi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TravisCiProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.travisCiApiCredentials];
    }

}
