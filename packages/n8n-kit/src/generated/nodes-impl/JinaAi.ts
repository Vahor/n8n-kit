// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JinaAiApiCredentials } from "../credentials/JinaAiApi.ts";
import type { Credentials } from "../../credentials";
import type { JinaAiNodeParameters } from "../nodes/JinaAi";
import { Node, type NodeProps } from "../../nodes";

export interface JinaAiProps extends NodeProps {

    readonly parameters: JinaAiNodeParameters;
    readonly jinaAiApiCredentials: Credentials<JinaAiApiCredentials>;

}

export class JinaAi<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.jinaAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: JinaAiProps) {

        super(id, props);

    }

    override getCredentials() {

        return [this.props!.jinaAiApiCredentials];

    }


}
