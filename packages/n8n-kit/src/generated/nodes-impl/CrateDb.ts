// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CrateDbCredentials } from "../credentials/CrateDb.ts";
import type { Credentials } from "../../credentials";
import type { CrateDbNodeParameters } from "../nodes/CrateDb";
import { Node, type NodeProps } from "../../nodes";

export interface CrateDbProps extends NodeProps {
    readonly parameters: CrateDbNodeParameters;
    readonly crateDbCredentials: Credentials<CrateDbCredentials>;
}

/**
 * Add and update data in CrateDB
 */
export class CrateDb<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.crateDb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: CrateDbProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.crateDbCredentials];
    }

}
