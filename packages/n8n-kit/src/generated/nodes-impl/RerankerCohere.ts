// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CohereApiCredentials } from "../credentials/CohereApi.ts";
import type { Credentials } from "../../credentials";
import type { RerankerCohereNodeParameters } from "../nodes/RerankerCohere";
import { Node, type NodeProps } from "../../nodes";

export interface RerankerCohereProps extends NodeProps {

    readonly parameters: RerankerCohereNodeParameters;
    readonly cohereApiCredentials: Credentials<CohereApiCredentials>;

}

export class RerankerCohere<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.rerankerCohere" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: RerankerCohereProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.cohereApiCredentials];

    }


}
