// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { StickyNoteNodeParameters } from "../nodes/StickyNote";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface StickyNoteProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: StickyNoteNodeParameters;
}

/**
 * Make your workflow easier to understand
 */
export class StickyNote<L extends string, C extends IContext = never, P extends StickyNoteProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.stickyNote" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
