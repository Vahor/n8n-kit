// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CopperApiCredentials } from "../credentials/CopperApi.ts";
import type { Credentials } from "../../credentials";
import type { CopperTriggerNodeParameters } from "../nodes/CopperTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface CopperTriggerProps extends NodeProps {

    readonly parameters: CopperTriggerNodeParameters;
    readonly copperApiCredentials: Credentials<CopperApiCredentials>;

}

export class CopperTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.copperTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: CopperTriggerProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.copperApiCredentials];

    }


}
