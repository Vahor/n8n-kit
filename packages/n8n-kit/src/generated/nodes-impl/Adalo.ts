// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AdaloApiCredentials } from "../credentials/AdaloApi.ts";
import type { Credentials } from "../../credentials";
import type { AdaloNodeParameters } from "../nodes/Adalo";
import { Node, type NodeProps } from "../../nodes";

export interface AdaloProps extends NodeProps {

    readonly parameters: AdaloNodeParameters;
    readonly adaloApiCredentials: Credentials<AdaloApiCredentials>;

}

export class Adalo<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.adalo" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AdaloProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.adaloApiCredentials];

    }


}
