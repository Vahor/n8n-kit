// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { YourlsApiCredentials } from "../credentials/YourlsApi.ts";
import type { Credentials } from "../../credentials";
import type { YourlsNodeParameters } from "../nodes/Yourls";
import { Node, type NodeProps } from "../../nodes";

export interface YourlsProps extends NodeProps {

    readonly parameters: YourlsNodeParameters;
    readonly yourlsApiCredentials: Credentials<YourlsApiCredentials>;

}

export class Yourls<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.yourls" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: YourlsProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.yourlsApiCredentials];

    }


}
