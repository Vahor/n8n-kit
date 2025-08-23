// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { StickyNoteNodeParameters } from "../nodes/StickyNote";
import { Node, type NodeProps } from "../../nodes";

export interface StickyNoteProps extends NodeProps {

    readonly parameters: StickyNoteNodeParameters;

}

/**
 * Make your workflow easier to understand
 */
export class StickyNote<L extends string> extends Node<L> {

    protected type = "n8n-nodes-base.stickyNote" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: StickyNoteProps) {

        super(id, props);

    }


}
