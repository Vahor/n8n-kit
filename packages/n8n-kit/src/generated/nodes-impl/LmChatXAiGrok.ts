// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { XAiApiCredentials } from "../credentials/XAiApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatXAiGrokNodeParameters } from "../nodes/LmChatXAiGrok";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatXAiGrokProps extends NodeProps, LmChatXAiGrokNodeParameters {

    readonly xAiApiCredentials: Credentials<XAiApiCredentials>;

}

export class LmChatXAiGrok<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatXAiGrok" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmChatXAiGrokProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatXAiGrokNodeParameters, "xAiApiCredentials"> {

        const { xAiApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.xAiApiCredentials];

    }


}
