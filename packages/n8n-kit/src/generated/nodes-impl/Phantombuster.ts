// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PhantombusterApiCredentials } from "../credentials/PhantombusterApi.ts";
import type { Credentials } from "../../credentials";
import type { PhantombusterNodeParameters } from "../nodes/Phantombuster";
import { Node, type NodeProps } from "../../nodes";

export interface PhantombusterProps extends NodeProps {

    readonly parameters: PhantombusterNodeParameters;
    readonly phantombusterApiCredentials: Credentials<PhantombusterApiCredentials>;

}

export class Phantombuster<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.phantombuster" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PhantombusterProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.phantombusterApiCredentials];

    }


}
