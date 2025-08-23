// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CohereApiCredentials } from "../credentials/CohereApi.ts";
import type { Credentials } from "../../credentials";
import type { EmbeddingsCohereNodeParameters } from "../nodes/EmbeddingsCohere";
import { Node, type NodeProps } from "../../nodes";

export interface EmbeddingsCohereProps extends NodeProps, EmbeddingsCohereNodeParameters {

    readonly cohereApiCredentials: Credentials<CohereApiCredentials>;

}

export class EmbeddingsCohere<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.embeddingsCohere" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: EmbeddingsCohereProps) {

        super(id, props);

    }

    override getParameters() : Omit<EmbeddingsCohereNodeParameters, "cohereApiCredentials"> {

        const { cohereApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.cohereApiCredentials];

    }


}
