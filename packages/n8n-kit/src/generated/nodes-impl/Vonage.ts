// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { VonageApiCredentials } from "../credentials/VonageApi.ts";
import type { Credentials } from "../../credentials";
import type { VonageNodeParameters } from "../nodes/Vonage";
import { Node, type NodeProps } from "../../nodes";

export interface VonageProps extends NodeProps {

    readonly parameters: VonageNodeParameters;
    readonly vonageApiCredentials: Credentials<VonageApiCredentials>;

}

export class Vonage<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.vonage" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: VonageProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.vonageApiCredentials];

    }


}
