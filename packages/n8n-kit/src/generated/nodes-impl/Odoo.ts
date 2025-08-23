// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OdooApiCredentials } from "../credentials/OdooApi.ts";
import type { Credentials } from "../../credentials";
import type { OdooNodeParameters } from "../nodes/Odoo";
import { Node, type NodeProps } from "../../nodes";

export interface OdooProps extends NodeProps, OdooNodeParameters {

    readonly odooApiCredentials: Credentials<OdooApiCredentials>;

}

export class Odoo<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.odoo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: OdooProps) {

        super(id, props);

    }

    override getParameters() : Omit<OdooNodeParameters, "odooApiCredentials"> {

        const { odooApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.odooApiCredentials];

    }


}
