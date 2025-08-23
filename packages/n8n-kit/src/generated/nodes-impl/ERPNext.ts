// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { ErpNextApiCredentials } from "../credentials/ERPNextApi.ts";
import type { Credentials } from "../../credentials";
import type { ERPNextNodeParameters } from "../nodes/ERPNext";
import { Node, type NodeProps } from "../../nodes";

export interface ERPNextProps extends NodeProps, ERPNextNodeParameters {

    readonly erpNextApiCredentials: Credentials<ErpNextApiCredentials>;

}

export class ERPNext<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.erpNext" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: ERPNextProps) {

        super(id, props);

    }

    override getParameters() : Omit<ERPNextNodeParameters, "erpNextApiCredentials"> {

        const { erpNextApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.erpNextApiCredentials];

    }


}

