// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OdooApiCredentials } from "../credentials/OdooApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { OdooNodeParameters } from "../nodes/Odoo";
import { Node, type NodeProps } from "../../nodes/node";

export interface OdooProps extends NodeProps {
    readonly parameters: OdooNodeParameters;
    readonly odooApiCredentials: Credentials<OdooApiCredentials>;
}

/**
 * Consume Odoo API
 */
export class Odoo<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.odoo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: OdooProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.odooApiCredentials];
    }

}
