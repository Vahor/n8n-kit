// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { StickyNoteNodeParameters } from "../nodes/StickyNote";
import { Node, type NodeProps } from "../../nodes/node";

export interface StickyNoteProps extends NodeProps {
    readonly parameters: StickyNoteNodeParameters;
}

/**
 * Make your workflow easier to understand
 */
export class StickyNote<C extends IContext, L extends string = string> extends Node<L, C> {
    protected type = "n8n-nodes-base.stickyNote" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: StickyNoteProps) {
        super(id, props);
    }

}
