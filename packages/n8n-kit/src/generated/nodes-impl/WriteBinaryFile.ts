// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { WriteBinaryFileNodeParameters } from "../nodes/WriteBinaryFile";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface WriteBinaryFileProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: WriteBinaryFileNodeParameters;
}

/**
 * Writes a binary file to disk
 */
export class WriteBinaryFile<L extends string, C extends IContext = never, P extends WriteBinaryFileProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.writeBinaryFile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
