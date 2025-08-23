// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { QuestDbCredentials } from "../credentials/QuestDb.ts";
import type { Credentials } from "../../credentials";
import type { QuestDbNodeParameters } from "../nodes/QuestDb";
import { Node, type NodeProps } from "../../nodes";

export interface QuestDbProps extends NodeProps, QuestDbNodeParameters {

    readonly questDbCredentials: Credentials<QuestDbCredentials>;

}

export class QuestDb<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.questDb" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: QuestDbProps) {

        super(id, props);

    }

    override getParameters() : Omit<QuestDbNodeParameters, "questDbCredentials"> {

        const { questDbCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.questDbCredentials];

    }


}

