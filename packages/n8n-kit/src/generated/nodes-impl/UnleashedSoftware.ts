// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { UnleashedSoftwareApiCredentials } from "../credentials/UnleashedSoftwareApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { UnleashedSoftwareNodeParameters } from "../nodes/UnleashedSoftware";
import { Node, type NodeProps } from "../../nodes/node";

export interface UnleashedSoftwareProps extends NodeProps {
    readonly parameters: UnleashedSoftwareNodeParameters;
    readonly unleashedSoftwareApiCredentials: Credentials<UnleashedSoftwareApiCredentials>;
}

/**
 * Consume Unleashed Software API
 */
export class UnleashedSoftware<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.unleashedSoftware" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: UnleashedSoftwareProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.unleashedSoftwareApiCredentials];
    }

}
