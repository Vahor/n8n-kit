// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JinaAiApiCredentials } from "../credentials/JinaAiApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { JinaAiNodeParameters } from "../nodes/JinaAi";
import { Node, type NodeProps } from "../../nodes/node";

export interface JinaAiProps extends NodeProps {
    readonly parameters: JinaAiNodeParameters;
    readonly jinaAiApiCredentials: Credentials<JinaAiApiCredentials>;
}

/**
 * Interact with Jina AI API
 */
export class JinaAi<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.jinaAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: JinaAiProps) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props!.jinaAiApiCredentials];
    }

}
