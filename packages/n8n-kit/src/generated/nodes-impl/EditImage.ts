// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { EditImageNodeParameters } from "../nodes/EditImage";
import { Node, type NodeProps } from "../../nodes";

export interface EditImageProps extends NodeProps {
    readonly parameters: EditImageNodeParameters;
}

/**
 * Edits an image like blur, resize or adding border and text
 */
export class EditImage<L extends string> extends Node<L> {
    protected type = "n8n-nodes-base.editImage" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: EditImageProps) {
        super(id, props);
    }

}
