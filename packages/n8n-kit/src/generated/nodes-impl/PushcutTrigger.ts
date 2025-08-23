// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PushcutApiCredentials } from "../credentials/PushcutApi.ts";
import type { Credentials } from "../../credentials";
import type { PushcutTriggerNodeParameters } from "../nodes/PushcutTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface PushcutTriggerProps extends NodeProps {

    readonly parameters: PushcutTriggerNodeParameters;
    readonly pushcutApiCredentials: Credentials<PushcutApiCredentials>;

}

export class PushcutTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.pushcutTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: PushcutTriggerProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.pushcutApiCredentials];

    }


}
