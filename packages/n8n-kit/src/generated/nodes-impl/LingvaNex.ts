// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { LingvaNexApiCredentials } from "../credentials/LingvaNexApi.ts";
import type { Credentials } from "../../credentials";
import type { LingvaNexNodeParameters } from "../nodes/LingvaNex";
import { Node, type NodeProps } from "../../nodes";

export interface LingvaNexProps extends NodeProps {

    readonly parameters: LingvaNexNodeParameters;
    readonly lingvaNexApiCredentials: Credentials<LingvaNexApiCredentials>;

}

export class LingvaNex<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lingvaNex" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LingvaNexProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.lingvaNexApiCredentials];

    }


}
