// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { RundeckApiCredentials } from "../credentials/RundeckApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { RundeckNodeParameters } from "../nodes/Rundeck";
import { Node, type NodeProps } from "../../nodes/node";

export interface RundeckProps extends NodeProps {
    readonly parameters: RundeckNodeParameters;
    readonly rundeckApiCredentials: Credentials<RundeckApiCredentials>;
}

/**
 * Manage Rundeck API
 */
export class Rundeck<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.rundeck" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: RundeckProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.rundeckApiCredentials];
    }

}
