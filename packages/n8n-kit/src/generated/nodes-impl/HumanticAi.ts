// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { HumanticAiApiCredentials } from "../credentials/HumanticAiApi.ts";
import type { Credentials } from "../../credentials";
import type { HumanticAiNodeParameters } from "../nodes/HumanticAi";
import { Node, type NodeProps } from "../../nodes";

export interface HumanticAiProps extends NodeProps, HumanticAiNodeParameters {

    readonly humanticAiApiCredentials: Credentials<HumanticAiApiCredentials>;

}

export class HumanticAi<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.humanticAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: HumanticAiProps) {

        super(id, props);

    }

    override getParameters() : Omit<HumanticAiNodeParameters, "humanticAiApiCredentials"> {

        const { humanticAiApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.humanticAiApiCredentials];

    }


}

