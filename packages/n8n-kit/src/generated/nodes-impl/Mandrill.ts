// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MandrillApiCredentials } from "../credentials/MandrillApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { MandrillNodeParameters } from "../nodes/Mandrill";
import { Node, type NodeProps } from "../../nodes/node";

export interface MandrillProps extends NodeProps {
    readonly parameters: MandrillNodeParameters;
    readonly mandrillApiCredentials: Credentials<MandrillApiCredentials>;
}

/**
 * Consume Mandrill API
 */
export class Mandrill<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.mandrill" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MandrillProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.mandrillApiCredentials];
    }

}
