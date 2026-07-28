// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OdooApiKeyApiCredentials } from "../credentials/OdooApiKeyApi.ts";
import type { OdooApiCredentials } from "../credentials/OdooApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { OdooV2NodeParameters } from "../nodes/OdooV2";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface OdooV2Props extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: OdooV2NodeParameters;
    readonly odooApiKeyApiCredentials?: Credentials<OdooApiKeyApiCredentials>;
    readonly odooApiCredentials?: Credentials<OdooApiCredentials>;
}

/**
 * Consume Odoo API
 */
export class OdooV2<L extends string, C extends IContext = never, P extends OdooV2Props = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.odoo" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props?.odooApiKeyApiCredentials, this.props?.odooApiCredentials];
    }

}
