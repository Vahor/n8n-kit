// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CrowdDevApiCredentials } from "../credentials/CrowdDevApi.ts";
import type { Credentials } from "../../credentials";
import type { CrowdDevTriggerNodeParameters } from "../nodes/CrowdDevTrigger";
import { Node, type NodeProps } from "../../nodes";

export interface CrowdDevTriggerProps extends NodeProps {

    readonly parameters: CrowdDevTriggerNodeParameters;
    readonly crowdDevApiCredentials: Credentials<CrowdDevApiCredentials>;

}

export class CrowdDevTrigger<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.crowdDevTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: CrowdDevTriggerProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.crowdDevApiCredentials];

    }


}
