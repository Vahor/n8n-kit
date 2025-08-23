// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GhostAdminApiCredentials } from "../credentials/GhostAdminApi.ts";
import type { GhostContentApiCredentials } from "../credentials/GhostContentApi.ts";
import type { Credentials } from "../../credentials";
import type { GhostNodeParameters } from "../nodes/Ghost";
import { Node, type NodeProps } from "../../nodes";

export interface GhostProps extends NodeProps {
    readonly parameters: GhostNodeParameters;
    readonly ghostAdminApiCredentials?: Credentials<GhostAdminApiCredentials>;
    readonly ghostContentApiCredentials?: Credentials<GhostContentApiCredentials>;
}

/**
 * Consume Ghost API
 */
export class Ghost<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.ghost" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: GhostProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.ghostAdminApiCredentials, this.props!.ghostContentApiCredentials];
    }

}
