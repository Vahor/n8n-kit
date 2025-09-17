// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ExecuteCommandNodeParameters } from "../nodes/ExecuteCommand";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ExecuteCommandProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ExecuteCommandNodeParameters;
}

/**
 * Executes a command on the host
 */
export class ExecuteCommand<L extends string, C extends IContext = never, P extends ExecuteCommandProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.executeCommand" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
