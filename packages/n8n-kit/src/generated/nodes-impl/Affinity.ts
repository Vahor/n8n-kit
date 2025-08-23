// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { AffinityApiCredentials } from "../credentials/AffinityApi.ts";
import type { Credentials } from "../../credentials";
import type { AffinityNodeParameters } from "../nodes/Affinity";
import { Node, type NodeProps } from "../../nodes";

export interface AffinityProps extends NodeProps {

    readonly parameters: AffinityNodeParameters;
    readonly affinityApiCredentials: Credentials<AffinityApiCredentials>;

}

export class Affinity<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.affinity" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: AffinityProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.affinityApiCredentials];

    }


}
