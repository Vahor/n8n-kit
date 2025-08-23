// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CohereApiCredentials } from "../credentials/CohereApi.ts";
import type { Credentials } from "../../credentials";
import type { LmCohereAINodeParameters } from "../nodes/LmCohereAI";
import { Node, type NodeProps } from "../../nodes";

export interface LmCohereAIProps extends NodeProps, LmCohereAINodeParameters {

    readonly cohereApiCredentials: Credentials<CohereApiCredentials>;

}

export class LmCohereAI<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmCohere" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmCohereAIProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmCohereAINodeParameters, "cohereApiCredentials"> {

        const { cohereApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.cohereApiCredentials];

    }


}

