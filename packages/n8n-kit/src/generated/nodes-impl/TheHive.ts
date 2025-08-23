// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { TheHiveApiCredentials } from "../credentials/TheHiveApi.ts";
import type { Credentials } from "../../credentials";
import type { TheHiveNodeParameters } from "../nodes/TheHive";
import { Node, type NodeProps } from "../../nodes";

export interface TheHiveProps extends NodeProps {

    readonly parameters: TheHiveNodeParameters;
    readonly theHiveApiCredentials: Credentials<TheHiveApiCredentials>;

}

/**
 * Consume TheHive API
 */
export class TheHive<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.theHive" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: TheHiveProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.theHiveApiCredentials];

    }


}
