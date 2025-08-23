// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { WorkableApiCredentials } from "../credentials/WorkableApi.ts";
import type { Credentials } from "../../credentials";
import type { WorkableTriggerNodeParameters } from "../nodes/WorkableTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface WorkableTriggerProps extends NodeProps, WorkableTriggerNodeParameters {

    readonly workableApiCredentials: Credentials<WorkableApiCredentials>;

}

export class WorkableTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.workableTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: WorkableTriggerProps) {

        super(id, props);

    }

    override getParameters() : Omit<WorkableTriggerNodeParameters, "workableApiCredentials"> {

        const { workableApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.workableApiCredentials];

    }


}
