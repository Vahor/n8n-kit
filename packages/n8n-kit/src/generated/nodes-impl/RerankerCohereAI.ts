// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CohereApiCredentials } from "../credentials/CohereApi.ts";
import type { Credentials } from "../../credentials";
import type { RerankerCohereAINodeParameters } from "../nodes/RerankerCohereAI";
import { Node, type NodeProps } from "../../nodes";

export interface RerankerCohereAIProps extends NodeProps, RerankerCohereAINodeParameters {

    readonly cohereApiCredentials: Credentials<CohereApiCredentials>;

}

export class RerankerCohereAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.rerankerCohere" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: RerankerCohereAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<RerankerCohereAINodeParameters, "cohereApiCredentials"> {

        const { cohereApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.cohereApiCredentials];

    }


}

