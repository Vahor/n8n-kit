// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { RenameKeysNodeParameters } from "../nodes/RenameKeys";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface RenameKeysProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: RenameKeysNodeParameters;
}

/**
 * Update item field names
 */
export class RenameKeys<L extends string, C extends IContext = never, P extends RenameKeysProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.renameKeys" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
