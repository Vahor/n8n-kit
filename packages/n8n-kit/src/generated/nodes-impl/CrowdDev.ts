// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CrowdDevApiCredentials } from "../credentials/CrowdDevApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { CrowdDevNodeParameters } from "../nodes/CrowdDev";
import { Node, type NodeProps } from "../../nodes/node";

export interface CrowdDevProps extends NodeProps {
    readonly parameters: CrowdDevNodeParameters;
    readonly crowdDevApiCredentials: Credentials<CrowdDevApiCredentials>;
}

/**
 * crowd.dev is an open-source suite of community and data tools built to unlock community-led growth for your organization.
 */
export class CrowdDev<C extends IContext, L extends string> extends Node<L, C> {
    protected type = "n8n-nodes-base.crowdDev" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: CrowdDevProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.crowdDevApiCredentials];
    }

}
