// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MandrillApiCredentials } from "../credentials/MandrillApi.ts";
import type { Credentials } from "../../credentials";
import type { MandrillNodeParameters } from "../nodes/Mandrill";
import { Node, type NodeProps } from "../../nodes";

export interface MandrillProps extends NodeProps {

    readonly parameters: MandrillNodeParameters;
    readonly mandrillApiCredentials: Credentials<MandrillApiCredentials>;

}

export class Mandrill<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mandrill" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: MandrillProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.mandrillApiCredentials];

    }


}
