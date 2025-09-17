// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { EditImageNodeParameters } from "../nodes/EditImage";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface EditImageProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: EditImageNodeParameters;
}

/**
 * Edits an image like blur, resize or adding border and text
 */
export class EditImage<L extends string, C extends IContext = never, P extends EditImageProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.editImage" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
