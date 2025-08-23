// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ERPNextApiCredentials } from "../credentials/ERPNextApi.ts";
import type { Credentials } from "../../credentials";
import type { ERPNextNodeParameters } from "../nodes/ERPNext";
import { Node, type NodeProps } from "../../nodes";

export interface ERPNextProps extends NodeProps {
    readonly parameters: ERPNextNodeParameters;
    readonly erpNextApiCredentials: Credentials<ERPNextApiCredentials>;
}

/**
 * Consume ERPNext API
 */
export class ERPNext<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.erpNext" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: ERPNextProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.erpNextApiCredentials];
    }

}
