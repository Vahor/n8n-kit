// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OdooApiCredentials } from "../credentials/OdooApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { OdooV1NodeParameters } from "../nodes/OdooV1";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface OdooV1Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: OdooV1NodeParameters;
    readonly odooApiCredentials: Credentials<OdooApiCredentials>;
}

/**
 * Consume Odoo API
 */
export class OdooV1<L extends string, C extends IContext = never, P extends OdooV1Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.odoo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.odooApiCredentials];
    }

}
