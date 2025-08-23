// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { MistralCloudApiCredentials } from "../credentials/MistralCloudApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatMistralCloudNodeParameters } from "../nodes/LmChatMistralCloud";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatMistralCloudProps extends NodeProps, LmChatMistralCloudNodeParameters {

    readonly mistralCloudApiCredentials: Credentials<MistralCloudApiCredentials>;

}

export class LmChatMistralCloud<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatMistralCloud" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmChatMistralCloudProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatMistralCloudNodeParameters, "mistralCloudApiCredentials"> {

        const { mistralCloudApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.mistralCloudApiCredentials];

    }


}
