// GENERATED FILE, DO NOT EDIT
// see scripts/generate-nodes-impl.ts

import type { IContext } from "../../workflow/chain/types";
import type { ReadWriteFileNodeParameters } from "../nodes/ReadWriteFile";
import { Node, type NodeProps } from "../../nodes/node";
import type { Type } from "arktype";

export interface ReadWriteFileProps extends NodeProps {
    /** {@inheritDoc OutputSchema} */
    readonly outputSchema?: Type;
    readonly parameters?: ReadWriteFileNodeParameters;
}

/**
 * Read or write files from the computer that runs n8n
 */
export class ReadWriteFile<L extends string, C extends IContext = never, P extends ReadWriteFileProps = never> extends Node<L, [P] extends [never] ? C : NonNullable<P["outputSchema"]>["infer"]> {
    protected type = "n8n-nodes-base.readWriteFile" as const;
    protected typeVersion = 1 as const;

    constructor(id: L, override props?: P) {
        super(id, props);
    }

}
