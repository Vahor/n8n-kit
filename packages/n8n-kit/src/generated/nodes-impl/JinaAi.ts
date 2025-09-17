// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { JinaAiApiCredentials } from "../credentials/JinaAiApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { JinaAiNodeParameters } from "../nodes/JinaAi";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface JinaAiProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: JinaAiNodeParameters;
    readonly jinaAiApiCredentials: Credentials<JinaAiApiCredentials>;
}

/**
 * Interact with Jina AI API
 */
export class JinaAi<L extends string, C extends IContext = never, P extends JinaAiProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.jinaAi" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.jinaAiApiCredentials];
    }

}
