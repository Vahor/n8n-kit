// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { PushcutApiCredentials } from "../credentials/PushcutApi.ts";
import type { Credentials } from "../../credentials";
import type { IContext } from "../../workflow/chain/types";
import type { PushcutTriggerNodeParameters } from "../nodes/PushcutTrigger";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface PushcutTriggerProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: PushcutTriggerNodeParameters;
    readonly pushcutApiCredentials: Credentials<PushcutApiCredentials>;
}

/**
 * Starts the workflow when Pushcut events occur
 */
export class PushcutTrigger<L extends string, C extends IContext = never, P extends PushcutTriggerProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.pushcutTrigger" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props: P) {
        super(id, props);
    }

    override getCredentials() {
        return [this.props.pushcutApiCredentials];
    }

}
