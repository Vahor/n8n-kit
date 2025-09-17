// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OdooApiCredentials } from "../credentials/OdooApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { OdooNodeParameters } from "../nodes/Odoo";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface OdooProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: OdooNodeParameters;
    readonly odooApiCredentials: Credentials<OdooApiCredentials>;
}

/**
 * Consume Odoo API
 */
export class Odoo<L extends string, C extends IContext = never, P extends OdooProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.odoo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.odooApiCredentials];
    }

}
