// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TheHiveProjectApiCredentials } from "../credentials/TheHiveProjectApi.ts";
import type { Credentials } from "../../credentials";
import type { TheHiveProjectNodeParameters } from "../nodes/TheHiveProject";
import { Node, type NodeProps } from "../../nodes";

export interface TheHiveProjectProps extends NodeProps {
    readonly parameters: TheHiveProjectNodeParameters;
    readonly theHiveProjectApiCredentials: Credentials<TheHiveProjectApiCredentials>;
}

/**
 * Consume TheHive 5 API
 */
export class TheHiveProject<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.theHiveProject" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TheHiveProjectProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.theHiveProjectApiCredentials];
    }

}
