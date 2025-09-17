// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { GhostAdminApiCredentials } from "../credentials/GhostAdminApi.ts";
import type { GhostContentApiCredentials } from "../credentials/GhostContentApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { GhostNodeParameters } from "../nodes/Ghost";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface GhostProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: GhostNodeParameters;
    readonly ghostAdminApiCredentials?: Credentials<GhostAdminApiCredentials>;
    readonly ghostContentApiCredentials?: Credentials<GhostContentApiCredentials>;
}

/**
 * Consume Ghost API
 */
export class Ghost<L extends string, C extends IContext = never, P extends GhostProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.ghost" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.ghostAdminApiCredentials, this.props?.ghostContentApiCredentials];
    }

}
