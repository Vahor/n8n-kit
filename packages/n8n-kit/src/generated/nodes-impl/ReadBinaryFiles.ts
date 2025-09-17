// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ReadBinaryFilesNodeParameters } from "../nodes/ReadBinaryFiles";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ReadBinaryFilesProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ReadBinaryFilesNodeParameters;
}

/**
 * Reads binary files from disk
 */
export class ReadBinaryFiles<L extends string, C extends IContext = never, P extends ReadBinaryFilesProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.readBinaryFiles" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
