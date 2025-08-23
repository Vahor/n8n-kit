// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MandrillApiCredentials } from "../credentials/MandrillApi.ts";
import type { Credentials } from "../../credentials";
import type { MandrillNodeParameters } from "../nodes/Mandrill";
import { Node, type NodeProps } from "../../nodes";

export interface MandrillProps extends NodeProps, MandrillNodeParameters {

    readonly mandrillApiCredentials: Credentials<MandrillApiCredentials>;

}

export class Mandrill<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mandrill" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props?: MandrillProps) {

        super(id, props);

    }

    override getParameters() {

        const { mandrillApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mandrillApiCredentials];

    }


}

