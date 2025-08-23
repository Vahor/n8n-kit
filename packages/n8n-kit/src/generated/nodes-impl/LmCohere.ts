// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CohereApiCredentials } from "../credentials/CohereApi.ts";
import type { Credentials } from "../../credentials";
import type { LmCohereNodeParameters } from "../nodes/LmCohere";
import { Node, type NodeProps } from "../../nodes";

export interface LmCohereProps extends NodeProps, LmCohereNodeParameters {

    readonly cohereApiCredentials: Credentials<CohereApiCredentials>;

}

export class LmCohere<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmCohere" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmCohereProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmCohereNodeParameters, "cohereApiCredentials"> {

        const { cohereApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.cohereApiCredentials];

    }


}
