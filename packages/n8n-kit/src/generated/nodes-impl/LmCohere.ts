// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CohereApiCredentials } from "../credentials/CohereApi.ts";
import type { Credentials } from "../../credentials";
import type { LmCohereNodeParameters } from "../nodes/LmCohere";
import { Node, type NodeProps } from "../../nodes";

export interface LmCohereProps extends NodeProps {

    readonly parameters: LmCohereNodeParameters;
    readonly cohereApiCredentials: Credentials<CohereApiCredentials>;

}

/**
 * Language Model Cohere
 */
export class LmCohere<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.lmCohere" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LmCohereProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.cohereApiCredentials];

    }


}
