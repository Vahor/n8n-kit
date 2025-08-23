// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { OpenRouterApiCredentials } from "../credentials/OpenRouterApi.ts";
import type { Credentials } from "../../credentials";
import type { LmChatOpenRouterNodeParameters } from "../nodes/LmChatOpenRouter";
import { Node, type NodeProps } from "../../nodes";

export interface LmChatOpenRouterProps extends NodeProps, LmChatOpenRouterNodeParameters {

    readonly openRouterApiCredentials: Credentials<OpenRouterApiCredentials>;

}

export class LmChatOpenRouter<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.lmChatOpenRouter" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, public readonly props: LmChatOpenRouterProps) {

        super(id, props);

    }

    override getParameters() : Omit<LmChatOpenRouterNodeParameters, "openRouterApiCredentials"> {

        const { openRouterApiCredentials:_0, ...rest } = this.props;
        return rest;

    }

    override getCredentials() {

        return [this.props.openRouterApiCredentials];

    }


}
