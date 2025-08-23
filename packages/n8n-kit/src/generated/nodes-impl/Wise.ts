// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WiseApiCredentials } from "../credentials/WiseApi.ts";
import type { Credentials } from "../../credentials";
import type { WiseNodeParameters } from "../nodes/Wise";
import { Node, type NodeProps } from "../../nodes";

export interface WiseProps extends NodeProps {

    readonly parameters: WiseNodeParameters;
    readonly wiseApiCredentials: Credentials<WiseApiCredentials>;

}

export class Wise<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.wise" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: WiseProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.wiseApiCredentials];

    }


}
