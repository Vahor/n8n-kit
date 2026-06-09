// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { NvidiaApiCredentials } from "../credentials/NvidiaApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext, IChainable } from "../../workflow/chain/types";
import type { LmChatNvidiaNodeParameters } from "../nodes/LmChatNvidia";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface LmChatNvidiaProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: LmChatNvidiaNodeParameters;
    readonly nvidiaApiCredentials: Credentials<NvidiaApiCredentials>;
}

/**
 * NVIDIA Nemotron models from build.nvidia.com or self-hosted NIM
 */
export class LmChatNvidia<L extends string, C extends IContext = never, P extends LmChatNvidiaProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "@n8n/n8n-nodes-langchain.lmChatNvidia" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.nvidiaApiCredentials];
    }

    public toAiLanguageModel(next: IChainable): this {
        super.addNext(next.startState, { type: "ai_languageModel" });
        return this;
    }

}
