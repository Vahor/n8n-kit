// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { FlowApiCredentials } from "../credentials/FlowApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { FlowNodeParameters } from "../nodes/Flow";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface FlowProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: FlowNodeParameters;
    readonly flowApiCredentials: Credentials<FlowApiCredentials>;
}

/**
 * Consume Flow API
 */
export class Flow<L extends string, C extends IContext = never, P extends FlowProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.flow" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.flowApiCredentials];
    }

}
