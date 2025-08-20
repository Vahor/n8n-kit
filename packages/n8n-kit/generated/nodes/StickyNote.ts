// GENERATED FILE, DO NOT EDIT
// Generated from '/n8n/packages/nodes-base/nodes/StickyNote/StickyNote.node.ts' node

export const name = "stickyNote" as const;
export const description = "Make your workflow easier to understand" as const;
export const version = 1 as const;
export const defaults = {"name":"Sticky Note","color":"#FFD233"} as const;

/**
 * Make your workflow easier to understand
 */
export interface StickyNoteNodeParameters {

    /**
     * Default: "## I'm a note \n**Double click** to edit me. [Guide](https://docs.n8n.io/workflows/sticky-notes/)"
     */
    readonly content?: string;

    /**
     * Default: 160
     */
    readonly height: number;

    /**
     * Default: 240
     */
    readonly width: number;

    /**
     * Default: 1
     */
    readonly color: number;


}

