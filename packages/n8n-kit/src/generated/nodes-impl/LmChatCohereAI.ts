// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CohereApiCredentials } from "../credentials/CohereApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatCohereAINodeParameters } from "../nodes/LmChatCohereAI";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatCohereAIProps extends NodeProps, LmChatCohereAINodeParameters {

    readonly cohereApiCredentials: Credentials<CohereApiCredentials>;

}

export class LmChatCohereAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatCohere" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmChatCohereAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatCohereAINodeParameters, "cohereApiCredentials"> {

        const { cohereApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.cohereApiCredentials];

    }


}
