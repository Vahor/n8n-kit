// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { QuestDbCredentials } from "../credentials/QuestDb.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { QuestDbNodeParameters } from "../nodes/QuestDb";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface QuestDbProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: QuestDbNodeParameters;
    readonly questDbCredentials: Credentials<QuestDbCredentials>;
}

/**
 * Get, add and update data in QuestDB
 */
export class QuestDb<L extends string, C extends IContext = never, P extends QuestDbProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.questDb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.questDbCredentials];
    }

}
