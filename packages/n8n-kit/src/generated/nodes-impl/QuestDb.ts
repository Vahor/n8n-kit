// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { QuestDbCredentials } from "../credentials/QuestDb.ts";
import type { Credentials } from "../../credentials";
import type { QuestDbNodeParameters } from "../nodes/QuestDb";
import { Node, type NodeProps } from "../../nodes";

export interface QuestDbProps extends NodeProps {
    readonly parameters: QuestDbNodeParameters;
    readonly questDbCredentials: Credentials<QuestDbCredentials>;
}

/**
 * Get, add and update data in QuestDB
 */
export class QuestDb<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.questDb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: QuestDbProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.questDbCredentials];
    }

}
