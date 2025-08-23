// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { CohereApiCredentials } from "../credentials/CohereApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatCohereNodeParameters } from "../nodes/LmChatCohere";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatCohereProps extends NodeProps, LmChatCohereNodeParameters {

    readonly cohereApiCredentials: Credentials<CohereApiCredentials>;

}

export class LmChatCohere<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatCohere" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmChatCohereProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatCohereNodeParameters, "cohereApiCredentials"> {

        const { cohereApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.cohereApiCredentials];

    }


}
