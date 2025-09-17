// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ReadBinaryFileNodeParameters } from "../nodes/ReadBinaryFile";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ReadBinaryFileProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ReadBinaryFileNodeParameters;
}

/**
 * Reads a binary file from disk
 */
export class ReadBinaryFile<L extends string, C extends IContext = never, P extends ReadBinaryFileProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.readBinaryFile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
