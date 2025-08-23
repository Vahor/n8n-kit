// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MistralCloudApiCredentials } from "../credentials/MistralCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { MistralAiNodeParameters } from "../nodes/MistralAi";
import { Node, type NodeProps } from "../../nodes";

export interface MistralAiProps extends NodeProps, MistralAiNodeParameters {

    readonly mistralCloudApiCredentials: Credentials<MistralCloudApiCredentials>;

}

export class MistralAi<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.mistralAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: MistralAiProps) {

        super(id, props);

    }

    override getParameters() : Omit<MistralAiNodeParameters, "mistralCloudApiCredentials"> {

        const { mistralCloudApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mistralCloudApiCredentials];

    }


}
