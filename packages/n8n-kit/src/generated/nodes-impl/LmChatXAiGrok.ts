// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { XAiApiCredentials } from "../credentials/XAiApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatXAiGrokNodeParameters } from "../nodes/LmChatXAiGrok";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatXAiGrokProps extends NodeProps {

    readonly parameters: LmChatXAiGrokNodeParameters;
    readonly xAiApiCredentials: Credentials<XAiApiCredentials>;

}

export class LmChatXAiGrok<L extends string> extends Node<L> {

    protected type = "@n8n/n8n-nodes-langchain.lmChatXAiGrok" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: LmChatXAiGrokProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.xAiApiCredentials];

    }


}
