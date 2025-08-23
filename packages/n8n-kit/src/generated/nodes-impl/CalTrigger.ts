// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CalApiCredentials } from "../credentials/CalApi.ts";
import type { Credentials } from "../../credentials";
import type { CalTriggerNodeParameters } from "../nodes/CalTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface CalTriggerProps extends NodeProps {

    readonly parameters: CalTriggerNodeParameters;
    readonly calApiCredentials: Credentials<CalApiCredentials>;

}

export class CalTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.calTrigger" as const;
    protected typeVersion = 2 as const;

    constructor(id: L, override props: CalTriggerProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.calApiCredentials];

    }


}
